
import { Link } from 'react-router-dom';
import icon from "@/assets/icone.jpeg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src={icon}
        alt="K&K Consultoria Logo" 
        className="h-10 w-10" 
      />
      <div className="inline-flex flex-col">
        <span className="text-xl font-bold text-gray-900">K&K</span>
        <span className="text-xs text-teal-700">Consultoria em Segurança</span>
      </div>
    </Link>
  );
};

export default Logo;
