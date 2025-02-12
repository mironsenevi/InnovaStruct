import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black font-Raleway shadow-lg border-b-2 border-primary fixed w-full z-10 mb-4">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
  <img src="../assets/Logo.png" alt="Logo" className="h-12 sm:h-16 w-auto" />
  <span className="hidden sm:block text-4xl font-bold text-yellow-400 ml-2">InnovaStruct</span>
</div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a
              href="#home"
              className="relative  text-yellow-400 px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Home
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#features"
              className="relative  text-yellow-400 px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Features
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#pricing"
              className="relative  text-yellow-400 px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Pricing
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#ourteam"
              className="relative  text-yellow-400 px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Our Team
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="mailto:mantramatrix117@gmail.com"
              className="relative  text-yellow-400 hover:text-primary hover:bg-white inset-0 border border-yellow-400 px-3 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
            >
              GET IN TOUCH
              <span className="absolute inset-0 border border-white rounded-full px-3 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className=" text-yellow-400 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <BsX /> : <BsList />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive dropdown menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center">
          <div className="py-2 space-y-1">
            <a
              href="#"
              className=" text-yellow-400 text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Home
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className=" text-yellow-400 text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              About
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className=" text-yellow-400 text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Services
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className=" text-yellow-400 text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Contact
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className=" text-yellow-400 w-64 text-center rounded-full px-3 py-2 text-base font-medium transition duration-500 relative hover:bg-white hover:text-primary block"
            >
              Get in touch
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;