import React from "react";
import Logo from "/assets/SomnaAI.png";

const Navbar = () => {
  return (
    <>
      <header className="dream-gradient py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <a href="/" className="flex items-center gap-2">
                <img src={Logo} alt="SomnaAI Logo" className="hidden md:flex w-20" />
                <img src={Logo} alt="SomnaAI Logo" className="md:hidden flex w-15" />
                <span className="text-4xl md:text-5xl font-bold mb-2">SomnaAI</span>
              </a>
            </div>

            {/* <div className="flex space-x-4">
              <button className="px-6 py-3 bg-white text-indigo-800 rounded-full font-semibold hover:bg-opacity-90 transition">Sign Up</button>
              <button className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition">Login</button>
            </div> */}
          </div>
          <p className="text-xl opacity-90 text-center md:text-left mt-4 md:mt-0">
            Unlock your subconscious through dream intelligence
          </p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
