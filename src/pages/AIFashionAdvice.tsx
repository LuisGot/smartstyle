
import { useState } from "react";
import { trendProducts } from "../lib/mockData";

const AIFashionAdvice = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [styleAnalysis, setStyleAnalysis] = useState("");
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setUploadedImage(e.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const analyzeStyle = () => {
    // Simulate style analysis
    const styles = [
      "Streetwear x Scandinavian",
      "Y2K Revival",
      "Minimalismus Deluxe",
      "Casual Chic",
      "Modern Vintage"
    ];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    setStyleAnalysis(randomStyle);
    setShowResults(true);
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">KI-Modeberatung per Bild</h1>
          <p className="text-lg text-gray-600 mb-8">
            Lade ein Bild eines Outfits hoch, das dir gefällt, und unsere KI erkennt den Style und schlägt ähnliche Teile vor.
          </p>
          
          <div className="bg-white rounded-2xl shadow-soft p-6">
            {!showResults ? (
              <>
                <h2 className="text-2xl font-semibold mb-6">Style erkennen</h2>
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 text-center ${
                    uploadedImage ? 'border-purple' : 'border-gray-300 hover:border-purple'
                  } transition-colors`}
                >
                  {uploadedImage ? (
                    <div className="relative max-w-sm mx-auto">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded Style" 
                        className="rounded-lg max-h-64 mx-auto" 
                      />
                      <button 
                        onClick={() => setUploadedImage(null)} 
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-5xl mb-4 text-gray-300">🔍</div>
                      <p className="text-gray-500 mb-4">Lade ein Inspirations-Bild hoch (z.B. von Instagram oder Pinterest)</p>
                      <label className="cta-button-secondary cursor-pointer">
                        Bild auswählen
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleImageUpload} 
                        />
                      </label>
                    </>
                  )}
                </div>
                
                {uploadedImage && (
                  <div className="mt-6 text-center">
                    <button 
                      className="cta-button"
                      onClick={analyzeStyle}
                    >
                      Style erkennen
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold">Ergebnis der Analyse</h2>
                  <button 
                    className="text-gray-500 hover:text-gray-700 flex items-center"
                    onClick={() => {
                      setShowResults(false);
                      setUploadedImage(null);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"/>
                    </svg>
                    Neu starten
                  </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-1">
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <img 
                        src={uploadedImage!} 
                        alt="Analyzed Style" 
                        className="w-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="bg-purple/5 border border-purple/20 rounded-xl p-6">
                      <h3 className="font-semibold text-xl mb-2">Style erkannt:</h3>
                      <p className="text-xl text-purple font-bold">{styleAnalysis}</p>
                      <p className="mt-4 text-gray-600">
                        Diese Modeästhetik kombiniert moderne Elemente mit klassischen Einflüssen. Hier findest du passende Teile, um diesen Look nachzustylen.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Outfit-Vorschläge basierend auf deinem Style</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {trendProducts.slice(0, 3).map((product) => (
                    <div key={product.id} className="bento-card overflow-hidden">
                      <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <div className="text-5xl">👕</div>
                        {/* <img src={product.image} alt={product.name} className="w-full h-full object-cover" /> */}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{product.name}</h3>
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
                              {product.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="cta-button">
                    Weitere Vorschläge anzeigen
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFashionAdvice;
