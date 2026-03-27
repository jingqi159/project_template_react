import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, features }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-56 overflow-hidden relative group">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2 flex-shrink-0"></i>
              <span className="text-gray-700 dark:text-gray-200 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;