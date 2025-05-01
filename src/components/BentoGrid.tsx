
import { useState } from "react";
import { TrendProduct } from "../lib/mockData";
import ProductModal from "./ProductModal";

interface BentoGridProps {
  products: TrendProduct[];
}

const BentoGrid = ({ products }: BentoGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<TrendProduct | null>(null);
  
  return (
    <section id="trends-section" className="py-16 bg-white">
      <div className="page-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trend-Highlights</h2>
          <button className="text-aqua font-medium hover:underline">Alle Trends anzeigen</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`bento-card overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                product.colorVariant === 'aqua' ? 'border-2 border-aqua/40' : 'border-2 border-purple/40'
              }`}
            >
              <div className="h-72 bg-gray-100 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{product.price.toFixed(2)} €</span>
                  <div className="flex items-center space-x-1">
                    <span className={`w-2 h-2 rounded-full ${
                      product.availability === "online" || product.availability === "both" 
                        ? "bg-green-500" 
                        : "bg-gray-300"
                    }`}></span>
                    <span className="text-xs text-gray-500">
                      {product.availability === "online" 
                        ? "Online" 
                        : product.availability === "inStore" 
                          ? "Im Laden" 
                          : "Online & Laden"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default BentoGrid;
