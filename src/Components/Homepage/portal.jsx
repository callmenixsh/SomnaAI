import React from 'react'

const portal = () => {
  return (
    <>
    <main class="container mx-auto px-4 py-12">
        <section class="mb-16">
            <div class="max-w-4xl mx-auto text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Record & Visualize Your Dreams</h2>
                <p class="text-lg text-gray-300">Describe your dream and our AI will decode its emotional meaning, then transform it into a beautiful visual story.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Dream Input Panel -->
                <div class="bg-[#1f1b36] rounded-xl p-6 shadow-lg dream-glow">
                    <h3 class="text-xl font-semibold mb-4">Describe Your Dream</h3>
                    <div class="mb-4">
                        <div class="flex justify-between mb-2">
                            <label class="text-sm">Dream Date</label>
                            <span class="text-xs text-gray-400">Last night</span>
                        </div>
                        <input type="date" class="w-full bg-[#2a2438] border-none rounded-lg p-3 mb-4">
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-sm mb-2">Dream Title</label>
                        <input type="text" placeholder="Give your dream a name..." class="w-full bg-[#2a2438] border-none rounded-lg p-3">
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-sm mb-2">Dream Details</label>
                        <textarea class="w-full h-48 bg-[#2a2438] border-none rounded-lg p-3" placeholder="Describe what happened in your dream..."></textarea>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <button class="px-6 py-3 bg-indigo-600 rounded-full font-medium flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" />
                            </svg>
                            Record Dream
                        </button>
                        
                        <div class="flex items-center space-x-2">
                            <button class="p-2 rounded-full bg-[#2a2438] hover:bg-[#3a3458] transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button class="p-2 rounded-full bg-[#2a2438] hover:bg-[#3a3458] transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Dream Visualization Preview -->
                <div class="bg-[#1f1b36] rounded-xl p-6 shadow-lg dream-glow">
                    <h3 class="text-xl font-semibold mb-4">Dream Visualization</h3>
                    <div class="bg-[#2a2438] rounded-lg overflow-hidden">
                        <div class="h-64 flex items-center justify-center text-gray-400">
                            <div class="text-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <p>Your dream will be visualized here...</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <h4 class="font-medium mb-2">Emotional Analysis</h4>
                        <div class="grid grid-cols-3 gap-2 text-sm">
                            <div class="bg-[#2a2438] p-2 rounded flex items-center">
                                <span class="w-2 h-2 rounded-full bg-pink-500 mr-2"></span>
                                <span>Vibrancy</span>
                            </div>
                            <div class="bg-[#2a2438] p-2 rounded flex items-center">
                                <span class="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                <span>Surrealism</span>
                            </div>
                            <div class="bg-[#2a2438] p-2 rounded flex items-center">
                                <span class="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                                <span>Clarity</span>
                            </div>
                        </div>
                    </div>
                    
                    <button class="w-full mt-6 py-3 bg-indigo-600 rounded-lg font-medium" id="generateVisualization">
                        Generate Full Visualization
                    </button>
                    <script>
                        document.getElementById('generateVisualization').addEventListener('click', async () => {
                            const dreamText = document.querySelector('textarea').value;
                            const response = await fetch('/api/visualize', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ dreamText })
                            });
                            const visualization = await response.json();
                            // Display visualization
                        });
                    </script>
                </div>
            </div>
        </section>
    </>
  )
}

export default portal