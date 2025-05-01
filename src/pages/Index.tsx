
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import FeatureCard from "../components/FeatureCard";
import { trendProducts, featuresList } from "../lib/mockData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <BentoGrid products={trendProducts} />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Entdecke unsere Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuresList.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial/CTA Section */}
      <section className="py-16 bg-gradient-to-br from-aqua/10 to-purple/10">
        <div className="page-container text-center">
          <h2 className="text-3xl font-bold mb-6">Deine Mode, dein Style</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lass dich von SmartStyle inspirieren und finde deinen persönlichen Look.
          </p>
          <button className="cta-button">SmartStyle entdecken</button>
        </div>
      </section>
    </div>
  );
};

export default Index;
