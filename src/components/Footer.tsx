
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">K&K Consultoria</h3>
            <p className="mb-4">
              Consultoria e Assessoria em Segurança do Trabalho e Gestão da Qualidade.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-200 transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-blue-200 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-200 transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="hover:text-blue-200 transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>Email: contato@kkconsultoria.com.br</li>
              <li>Telefone: (71) 99999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-6 pt-6 text-center">
          <p>&copy; {currentYear} K&K Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
