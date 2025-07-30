import requests
import urllib.parse
import time
import random
import os
import re
from PIL import Image
import io

class DirectImageGenerator:
    def __init__(self, output_folder="generated_images"):
        """Initialize with fixed output folder"""
        self.base_url = "https://image.pollinations.ai/prompt/"
        self.output_folder = output_folder
        
       
        self.apis = [
            {
                'name': 'Pollinations',
                'url': 'https://image.pollinations.ai/prompt/',
                'params': {
                    'width': '1024',
                    'height': '1024',
                    'model': 'flux',
                    'nologo': 'true',
                    'nofeed': 'true',
                    'private': 'true'
                }
            },
            {
                'name': 'Pollinations_v2',
                'url': 'https://pollinations.ai/p/',
                'params': {
                    'width': '1024',
                    'height': '1024',
                    'model': 'flux',
                    'nologo': '1',
                    'private': '1'
                }
            }
        ]
        
        
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
            print(f"📁 Created folder: {output_folder}")
    
    def crop_watermark(self, image_path):
        """Remove watermark by cropping bottom portion"""
        try:
            with Image.open(image_path) as img:
                width, height = img.size
                
               
                crop_height = int(height * 0.9)
                cropped = img.crop((0, 0, width, crop_height))
                
               
                cropped = cropped.resize((width, height), Image.Resampling.LANCZOS)
                
               
                cropped.save(image_path, 'PNG', quality=95)
                print(f"✂️ Cropped watermark from {image_path}")
                return True
        except Exception as e:
            print(f"❌ Error cropping watermark: {str(e)}")
            return False
    
    def enhance_prompt(self, text, style="general"):
        """Make any text into a good image prompt"""
        
        if style == "realistic":
            prefixes = ["photorealistic", "professional photo of", "high quality image of"]
            suffixes = ["sharp focus", "detailed", "professional photography"]
        elif style == "artistic":
            prefixes = ["beautiful artwork of", "artistic painting of", "creative art of"]
            suffixes = ["vibrant colors", "artistic style", "detailed artwork"]
        elif style == "dream":
            prefixes = ["surreal dreamscape of", "ethereal vision of", "mystical dream of"]
            suffixes = ["dreamlike", "surreal", "mystical atmosphere"]
        else:  # general
            prefixes = ["high quality image of", "detailed picture of", "beautiful image of"]
            suffixes = ["detailed", "high quality", "clear image"]
        
        prefix = random.choice(prefixes)
        suffix = random.choice(suffixes)
        
        return f"{prefix} {text}, {suffix}"
    
    def detect_scenes(self, prompt):
        """
        Automatically detect how many scenes/images should be generated
        based on sentence structure and story flow
        """
        
        prompt = prompt.strip()
        
       
        scene_transitions = [
            'suddenly', 'then', 'next', 'after that', 'meanwhile', 'later',
            'but then', 'however', 'suddenly i saw', 'i noticed', 'i found',
            'and then', 'afterwards', 'moments later', 'just then',
            'all of a sudden', 'at that moment', 'immediately', 'instantly',
            'then suddenly', 'but suddenly', 'when suddenly', 'and suddenly'
        ]
        
       
        time_transitions = [
            'morning', 'afternoon', 'evening', 'night', 'dawn', 'dusk',
            'first', 'second', 'third', 'finally', 'lastly'
        ]
        
       
        sentences = re.split(r'[.!?]+', prompt)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        
        if len(sentences) == 1:
            sentence = sentences[0].lower()
            original_sentence = sentences[0]
            
           
            scene_splits = []
            all_transitions = scene_transitions + time_transitions
            
            for transition in all_transitions:
                if transition in sentence:
                  
                    pos = sentence.find(transition)
                    if pos > 0:  
                        scene_splits.append((pos, transition))
            
           
            but_transitions = [' but ', ' however ', ' although ', ' though ']
            for but_trans in but_transitions:
                if but_trans in sentence:
                    pos = sentence.find(but_trans)
                    if pos > 0:
                        scene_splits.append((pos, but_trans.strip()))
            
           
            scene_splits.sort(key=lambda x: x[0])
            
            if scene_splits:
                
                scene_prompts = []
                last_pos = 0
                
                for pos, transition in scene_splits:
                    
                    before_scene = original_sentence[last_pos:pos].strip()
                    if before_scene:
                        scene_prompts.append(before_scene)
                    
                   
                    after_pos = pos + len(transition)
                    
                    next_pos = len(original_sentence)
                    for next_split_pos, _ in scene_splits:
                        if next_split_pos > pos:
                            next_pos = next_split_pos
                            break
                    
                    after_scene = original_sentence[after_pos:next_pos].strip()
                    if after_scene:
                        scene_prompts.append(after_scene)
                    
                    last_pos = next_pos
                
                
                scene_prompts = [scene for scene in scene_prompts if scene.strip()]
                
              
                scene_prompts = [scene for scene in scene_prompts if len(scene.split()) >= 3]
                
                if len(scene_prompts) >= 2:
                    print(f"🔍 Detected {len(scene_prompts)} scenes in single sentence:")
                    for i, scene in enumerate(scene_prompts):
                        print(f"  Scene {i+1}: {scene}")
                    return len(scene_prompts), scene_prompts
            
           
            action_words = ['walking', 'running', 'sitting', 'standing', 'looking', 'saw', 'found', 'noticed', 'went', 'came']
            actions_found = []
            
            for action in action_words:
                if action in sentence:
                    actions_found.append(action)
            
            if len(actions_found) >= 2:
               
                return 2, [prompt] 
            
            return 1, [prompt]
        
        
        scene_prompts = []
        current_scene = ""
        
        for sentence in sentences:
            sentence = sentence.strip()
            if not sentence:
                continue
                
          
            is_new_scene = False
            sentence_lower = sentence.lower()
            
            for transition in scene_transitions:
                if sentence_lower.startswith(transition) or f' {transition}' in sentence_lower:
                    is_new_scene = True
                    break
            
            if is_new_scene and current_scene:
             
                scene_prompts.append(current_scene.strip())
                current_scene = sentence
            else:
              
                if current_scene:
                    current_scene += " " + sentence
                else:
                    current_scene = sentence
        
    
        if current_scene:
            scene_prompts.append(current_scene.strip())
        
        
        if not scene_prompts:
            scene_prompts = sentences
        
        return len(scene_prompts), scene_prompts
    
    def generate_image(self, prompt, style="general", count=1, remove_watermark=True):
        """Generate image(s) from any prompt"""
        try:
            
            enhanced_prompt = self.enhance_prompt(prompt, style)
            print(f"🎨 Enhanced prompt: {enhanced_prompt}")
            
            generated_files = []
            
            for i in range(count):
                print(f"🔄 Generating image {i+1}/{count}...")
                
                
                success = False
                for api in self.apis:
                    try:
                        
                        encoded_prompt = urllib.parse.quote(enhanced_prompt)
                        
                        
                        url = f"{api['url']}{encoded_prompt}"
                        params = api['params'].copy()
                        params['seed'] = str(random.randint(1000, 9999))
                        
                      
                        param_string = '&'.join([f'{k}={v}' for k, v in params.items()])
                        full_url = f"{url}?{param_string}"
                        
                        print(f"🌐 Trying {api['name']}...")
                        
                        
                        response = requests.get(full_url, timeout=30)
                        
                        if response.status_code == 200:
                           
                            timestamp = int(time.time())
                            if count == 1:
                                filename = f"image_{timestamp}.png"
                            else:
                                filename = f"scene_{i+1}_{timestamp}.png"
                            
                            filepath = os.path.join(self.output_folder, filename)
                            
                          
                            with open(filepath, 'wb') as f:
                                f.write(response.content)
                            
                           
                            if remove_watermark:
                                self.crop_watermark(filepath)
                            
                            generated_files.append(filepath)
                            print(f"✅ Saved: {filepath}")
                            success = True
                            break
                            
                    except Exception as e:
                        print(f"❌ {api['name']} failed: {str(e)}")
                        continue
                
                if not success:
                    print(f"❌ All APIs failed for image {i+1}")
                
                
                if count > 1 and i < count - 1:
                    time.sleep(2)
            
            return generated_files
                
        except Exception as e:
            print(f"❌ Error: {str(e)}")
            return []


generator = DirectImageGenerator()

def generate(prompt, style="general", count=1, remove_watermark=True):
    """
    Main function - Generate image(s) from any prompt
    
    Args:
        prompt (str): Any text description
        style (str): "realistic", "artistic", "dream", or "general"
        count (int): Number of images to generate (default=1)
        remove_watermark (bool): Whether to remove watermarks (default=True)
    
    Returns:
        list: List of generated image file paths
    """
    return generator.generate_image(prompt, style, count, remove_watermark)

def generate_scene_sequence(scene_prompts, style="general", remove_watermark=True):
    """Generate images for multiple scenes in sequence"""
    all_results = []
    
    for i, scene_prompt in enumerate(scene_prompts):
        print(f"\n🎬 Scene {i+1}/{len(scene_prompts)}: {scene_prompt}")
        results = generator.generate_image(scene_prompt, style, 1, remove_watermark)
        all_results.extend(results)
        
       
        if i < len(scene_prompts) - 1:
            time.sleep(2)
    
    return all_results


def smart_generate(prompt_text):
    """
    SMART function that automatically detects how many scenes/images needed
    
    Examples:
        "a cat" -> generates 1 image
        "i am sitting on grass in park and suddenly i saw a girl but i can't see her face" -> generates 2 images
        "first i woke up. then i went to kitchen. finally i made coffee" -> generates 3 images
    """
    original_prompt = prompt_text.lower()
    
   
    manual_count = None
    count_words = ['images', 'pics', 'pictures', 'variations']
    
    for word in count_words:
        if word in original_prompt:
            words = original_prompt.split()
            try:
                word_index = words.index(word)
                if word_index > 0:
                    potential_count = words[word_index - 1]
                    if potential_count.isdigit():
                        manual_count = int(potential_count)
                        prompt_text = prompt_text.replace(f"{potential_count} {word}", "").strip()
                        break
            except:
                pass
    
  
    style = "general"
    style_keywords = {
        "realistic": ["realistic", "photorealistic", "photo", "real"],
        "artistic": ["artistic", "painting", "art", "drawing"],
        "dream": ["dream", "surreal", "fantasy", "mystical"]
    }
    
    for style_name, keywords in style_keywords.items():
        for keyword in keywords:
            if keyword in original_prompt:
                style = style_name
                break
        if style != "general":
            break
    
   
    if manual_count:
        print(f"🧠 Manual count detected: {manual_count} {style} image(s)")
        return generate(prompt_text, style, manual_count)
    else:
       
        scene_count, scene_prompts = generator.detect_scenes(prompt_text)
        print(f"🧠 Auto scene detection: Found {scene_count} scene(s)")
        
        for i, scene in enumerate(scene_prompts):
            print(f"  Scene {i+1}: {scene}")
        
        if scene_count == 1:
            return generate(prompt_text, style, 1, True)
        else:
            return generate_scene_sequence(scene_prompts, style, True)

# Example usage
if __name__ == "__main__":
    print("🎨 Smart Image Generator with Auto Scene Detection (No Watermark)")
    print("=" * 60)
    print("📝 Usage examples:")
    print("  'a cat sitting on a chair' → 1 image")
    print("  'i am sitting on grass and suddenly i saw a girl' → 2 images")
    print("  'first i woke up. then i went to kitchen. finally i made coffee' → 3 images")
    print("  'realistic photo of mountains' → 1 realistic image")
    print("  'artistic painting of sunset 3 images' → 3 artistic images (manual)")
    print("\n🚫 Watermark removal: ENABLED")
    print("📁 All images will be saved in 'generated_images' folder")
    print("=" * 60)
    
  
    test_prompt = "i walking in park then suddenly i saw a girl standing at bridge but i can't see her face"
    print(f"\n🧪 Testing with: '{test_prompt}'")
    results = smart_generate(test_prompt)
    print(f"Generated {len(results)} images!")
    
    
    test_prompt2 = "i am sitting on grass in park and suddenly i saw a girl"
    print(f"\n🧪 Testing with: '{test_prompt2}'")
    results2 = smart_generate(test_prompt2)
    print(f"Generated {len(results2)} images!")
    
    
    while True:
        try:
            prompt = input("\n🎯 Enter your prompt (or 'quit' to exit): ").strip()
            
            if prompt.lower() in ['quit', 'exit', 'q']:
                print("👋 Goodbye!")
                break
            
            if not prompt:
                print("⚠️ Please enter a prompt")
                continue
            
           
            results = smart_generate(prompt)
            
            if results:
                print(f"\n🎉 Successfully generated {len(results)} image(s):")
                for result in results:
                    print(f"  📸 {result}")
            else:
                print("❌ Failed to generate images")
                
        except KeyboardInterrupt:
            print("\n👋 Goodbye!")
            break
        except Exception as e:
            print(f"❌ Error: {str(e)}")


def quick_generate(prompt):
    """Generate images with auto scene detection"""
    return smart_generate(prompt)

def batch_generate(prompts_list):
    """Generate images for multiple prompts with auto detection"""
    all_results = []
    for prompt in prompts_list:
        results = smart_generate(prompt)
        all_results.extend(results)
    return all_results
