import React from "react";

const footer = () => {
	return (
<>
    <footer class="dream-gradient py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0">
                    <h2 class="text-2xl font-bold mb-2">SomnaAI</h2>
                    <p class="opacity-90">Exploring the frontier of dream intelligence</p>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                    <div>
                        {/* <h3 class="font-semibold mb-2">Resources</h3> */}
                        <ul class="space-y-1">
                            <li><a href="/gallery" class="hover:underline">Dream Gallery</a></li>
                            <li><a href="/science" class="hover:underline">Sleep Science</a></li>
                            {/* <li><a href="#" class="hover:underline">Tutorials</a></li> */}
                        </ul>
                    </div>
                    <div>
                        {/* <h3 class="font-semibold mb-2">Company</h3> */}
                        <ul class="space-y-1">
                            <li><a href="/about" class="hover:underline">About</a></li>
                            {/* <li><a href="#" class="hover:underline">Careers</a></li> */}
                        </ul>
                    </div>
                    {/* <div>
                        <h3 class="font-semibold mb-2">Connect</h3>
                        <ul class="space-y-1">
                            <li><a href="#" class="hover:underline">Twitter</a></li>
                            <li><a href="#" class="hover:underline">Instagram</a></li>
                            <li><a href="#" class="hover:underline">Discord</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div class="mt-8 pt-6 border-t border-white border-opacity-20 text-center text-sm">
                <p>© 2023 SomnaAI. All dreams reserved.</p>
            </div>
        </div>
    </footer>
</>
	);
};

export default footer;
