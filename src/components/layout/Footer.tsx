
import { Link } from 'react-router-dom';
import Logo from '@/components/layout/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Logo />
              <p className="mt-4 text-sm text-gray-600">
                Consultoria e Assessoria especializada em segurança do trabalho para indústrias.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navegação</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
                <li><Link to="/sobre" className="text-sm text-gray-600 hover:text-primary">Sobre</Link></li>
                <li><Link to="/servicos" className="text-sm text-gray-600 hover:text-primary">Serviços</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Serviços</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/servicos" className="text-sm text-gray-600 hover:text-primary">Treinamentos NR</Link></li>
                <li><Link to="/servicos" className="text-sm text-gray-600 hover:text-primary">Gestão de Segurança</Link></li>
                <li><Link to="/servicos" className="text-sm text-gray-600 hover:text-primary">Consultoria</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contato</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-600">
                  <span className="font-semibold">Telefone:</span> (11) 9999-9999
                </li>
                <li className="text-sm text-gray-600">
                  <span className="font-semibold">Email:</span> contato@kkconsultoria.com.br
                </li>
                <li className="text-sm text-gray-600">
                  <span className="font-semibold">Endereço:</span> Av. Exemplo, 1000 - São Paulo, SP
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} K&K Consultoria e Assessoria em Segurança do Trabalho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
