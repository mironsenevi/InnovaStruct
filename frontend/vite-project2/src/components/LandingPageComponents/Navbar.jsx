import { useState, useEffect } from "react";
import { BsList, BsX } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black font-Raleway shadow-lg border-b-2 border-primary fixed w-full z-10 mb-4">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
  <img src="../assets/Logo.png" alt="Logo" className="h-16 sm:h-16 w-auto" />
  <span className="hidden sm:block text-5xl font-bold text-yellow-400 ml-2">InnovaStruct</span>
</div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {['Home', 'Features', 'Pricing', 'Our Team'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="relative text-yellow-400 px-3 py-2 rounded-full text-sm lg:text-base font-medium 
                  transition duration-300 hover:bg-yellow-400/10"
              >
                {item}
                <span className="absolute inset-0 border border-yellow-400/50 rounded-full opacity-0 
                  hover:opacity-100 transition duration-300"></span>
              </a>
            ))}
            <a
              href="mailto:mantramatrix117@gmail.com"
              className="relative text-yellow-400 border border-yellow-400 px-4 py-2 rounded-full 
                text-sm lg:text-base font-medium transition duration-300 hover:bg-yellow-400 
                hover:text-black"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-yellow-400 p-2 rounded-lg hover:bg-yellow-400/10 
                focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
              onClick={toggleMenu}
            >
              {isOpen ? <BsX size={24} /> : <BsList size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/95 backdrop-blur-sm`}>
        <div className="px-4 py-2 space-y-1">
          {['Home', 'Features', 'Pricing', 'Our Team'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="block text-yellow-400 px-4 py-3 text-base font-medium rounded-lg
                transition duration-300 hover:bg-yellow-400/10"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:mantramatrix117@gmail.com"
            className="block text-yellow-400 border border-yellow-400 text-center mx-4 px-4 py-3 
              rounded-full text-base font-medium transition duration-300 hover:bg-yellow-400 
              hover:text-black mt-4 mb-6"
            onClick={() => setIsOpen(false)}
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;