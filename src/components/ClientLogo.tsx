
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ClientLogoProps {
  src: string;
  alt: string;
}

const ClientLogo = ({ src, alt }: ClientLogoProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <AspectRatio ratio={3/2} className="flex items-center justify-center">
        <img 
          src={src} 
          alt={alt} 
          className="max-h-20 object-contain"
        />
      </AspectRatio>
    </div>
  );
};

export default ClientLogo;
