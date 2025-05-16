
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <span>K&K Consultoria</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition-colors">Início</Link>
          <Link to="/sobre" className="hover:text-blue-200 transition-colors">Sobre Nós</Link>
          <Link to="/servicos" className="hover:text-blue-200 transition-colors">Serviços</Link>
          <Link to="/contato" className="hover:text-blue-200 transition-colors">Contato</Link>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-800 shadow-md z-50">
            <div className="flex flex-col items-center py-2">
              <Link to="/" className="w-full text-center py-2 hover:bg-blue-700" onClick={toggleMenu}>Início</Link>
              <Link to="/sobre" className="w-full text-center py-2 hover:bg-blue-700" onClick={toggleMenu}>Sobre Nós</Link>
              <Link to="/servicos" className="w-full text-center py-2 hover:bg-blue-700" onClick={toggleMenu}>Serviços</Link>
              <Link to="/contato" className="w-full text-center py-2 hover:bg-blue-700" onClick={toggleMenu}>Contato</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
