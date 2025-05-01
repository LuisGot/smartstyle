
import { TrendProduct, similarProducts } from "../lib/mockData";

interface ProductModalProps {
  product: TrendProduct;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold text-xl">Produktdetails</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-6xl">👕</div>
              {/* <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" /> */}
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-semibold mb-4">{product.price.toFixed(2)} €</p>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="font-medium">Verfügbarkeit:</span>
                </div>
                <p className="text-gray-600 mb-1">
                  {product.availability === "online" || product.availability === "both" 
                    ? "Online verfügbar bei: Zalando, AboutYou" 
                    : ""}
                </p>
                <p className="text-gray-600">
                  {product.availability === "inStore" || product.availability === "both" 
                    ? `In deiner Nähe: ${product.location}` 
                    : ""}
                </p>
              </div>
              
              <button className="cta-button w-full mb-2">
                Online Shop besuchen
              </button>
              <button className="border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg w-full hover:bg-gray-50 transition-colors duration-200">
                Im Laden reservieren
              </button>
            </div>
          </div>
          
          {/* Store Location */}
          {(product.availability === "inStore" || product.availability === "both") && (
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-3">Ladenfinder</h3>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Karte mit Ladenstandort</p>
                {/* This would be a map component in a real implementation */}
              </div>
            </div>
          )}
          
          {/* Similar Products */}
          <div className="mt-8">
            <h3 className="font-bold text-lg mb-3">Ähnliche Produkte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {similarProducts.map(item => (
                <div key={item.id} className="bento-card overflow-hidden">
                  <div className="h-32 bg-gray-100 flex items-center justify-center">
                    <div className="text-4xl">👕</div>
                    {/* <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> */}
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                    <p className="font-bold mt-1">{item.price.toFixed(2)} €</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
