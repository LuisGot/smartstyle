
import { useState } from "react";
import { trendProducts } from "../lib/mockData";

const ClothingRecognition = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
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
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setUploadedImage(e.target.result);
        }
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
    }
  };
  
  const analyzeClothing = () => {
    setShowResults(true);
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kleidungserkennung</h1>
          <p className="text-lg text-gray-600 mb-8">
            Lade ein Bild eines Kleidungsstücks hoch und erfahre, was es ist und wo du es kaufen kannst.
          </p>
          
          <div className="bg-white rounded-2xl shadow-soft p-6">
            {!showResults ? (
              <>
                <h2 className="text-2xl font-semibold mb-6">Kleidungsstück analysieren</h2>
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 text-center ${
                    isDragging ? 'border-aqua bg-aqua/5' : 
                    uploadedImage ? 'border-aqua' : 'border-gray-300 hover:border-aqua'
                  } transition-colors`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {uploadedImage ? (
                    <div className="relative max-w-sm mx-auto">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded Clothing" 
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
                      <div className="text-5xl mb-4 text-gray-300">👚</div>
                      <p className="text-gray-500 mb-4">
                        {isDragging ? 'Drop dein Bild hier!' : 'Ziehe ein Bild hierher oder'}
                      </p>
                      <label className="cta-button cursor-pointer">
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
                      onClick={analyzeClothing}
                    >
                      Analysieren
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold">Erkennungsergebnis</h2>
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
                
                <div className="grid md:grid-cols-5 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <img 
                        src={uploadedImage!} 
                        alt="Analyzed Clothing" 
                        className="w-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <div className="bg-aqua/5 border border-aqua/20 rounded-xl p-6 mb-4">
                      <h3 className="font-semibold text-xl mb-3">Wir haben folgendes erkannt:</h3>
                      <p className="text-xl font-bold text-gray-800">Schwarze Jacke - Oversized - von Zara</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-medium mb-3">Verfügbarkeit:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                          <span>Online verfügbar bei: Zalando, AboutYou</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                          <span>In deiner Nähe: Zara München Kaufingerstr.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Alternative Vorschläge</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bento-card overflow-hidden">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <div className="text-4xl">👕</div>
                    </div>
                    <div className="p-4">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded inline-block mb-2">Premium</div>
                      <h3 className="font-semibold">Designer Jacke</h3>
                      <p className="text-gray-500 text-sm mb-2">Ähnlicher Schnitt, höhere Qualität</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">149,99 €</span>
                        <span className="text-xs text-gray-500">
                          Weekday
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bento-card overflow-hidden">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <div className="text-4xl">👕</div>
                    </div>
                    <div className="p-4">
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded inline-block mb-2">Preis-Tipp</div>
                      <h3 className="font-semibold">Budget Jacke</h3>
                      <p className="text-gray-500 text-sm mb-2">Ähnliches Design, günstiger Preis</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">39,99 €</span>
                        <span className="text-xs text-gray-500">
                          H&M
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bento-card overflow-hidden">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <div className="text-4xl">👕</div>
                    </div>
                    <div className="p-4">
                      <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded inline-block mb-2">Lokal</div>
                      <h3 className="font-semibold">Vintage Jacke</h3>
                      <p className="text-gray-500 text-sm mb-2">Second Hand, nachhaltige Option</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">45,00 €</span>
                        <span className="text-xs text-gray-500">
                          Vintage Store München
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Shops in deiner Nähe</h3>
                  <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Karte mit Ladenstandorten</p>
                    {/* This would be a map component in a real implementation */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingRecognition;
