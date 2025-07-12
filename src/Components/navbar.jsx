import React from 'react'

const navbar = () => {
  return (
	<>
	    <header className="dream-gradient py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">SomnaAI</h1>
                    <p className="text-xl opacity-90">Unlock your subconscious through dream intelligence</p>
                </div>
                <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-white text-indigo-800 rounded-full font-semibold hover:bg-opacity-90 transition">Sign Up</button>
                    <button className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition">Login</button>
                </div>
            </div>
        </div>
    </header>
	</>
  )
}

export default navbar