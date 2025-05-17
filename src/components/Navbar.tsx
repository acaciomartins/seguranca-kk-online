
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="font-bold text-xl text-blue-800">
            K&K Consultoria
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800 transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-blue-800 transition-colors">
              Sobre Nós
            </Link>
            <Link to="/servicos" className="text-gray-700 hover:text-blue-800 transition-colors">
              Serviços
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-800 transition-colors">
              Contato
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
