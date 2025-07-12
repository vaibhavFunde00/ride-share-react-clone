
import { LucideIcon } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isPromo: boolean;
  image: string;
}

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  const { title, description, icon: Icon, isPromo, image } = service;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group relative overflow-hidden"
    >
      {isPromo && (
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          Promo
        </div>
      )}
      
      <div className="relative">
        <div className="w-full h-24 bg-gray-100 rounded-xl mb-3 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Icon className="w-4 h-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
