import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col items-center text-xs text-zinc-400 mt-36">
      {/* Social Media Icons with Links */}
      <div className="flex gap-6 text-6xl text-yellow-400">
        
        <a href="https://www.instagram.com/innovastruct_/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="hover:text-pink-500 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/company/innovastruct-app/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-700 transition duration-300" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="mt-4">Built by Team Mantra Matrix</p>
      <p className="mb-10">All rights reserved. ©</p>
    </footer>
  );
}

export default Footer;
