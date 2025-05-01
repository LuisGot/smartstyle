
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToTrends = () => {
    const trendsSection = document.getElementById('trends-section');
    if (trendsSection) {
      trendsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-lavender-50 py-16 md:py-24">
      <div className="page-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Dein KI-basierter Modeberater – <br />
            <span className="text-aqua">stylisch.</span> <span className="text-purple">smart.</span> <span className="text-gray-800">einfach.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entdecke deinen persönlichen Stil mit SmartStyle – der KI, die dich versteht und dir hilft, deine Garderobe zu optimieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToTrends}
              className="cta-button"
            >
              Style entdecken
            </button>
            <Link to="/outfit-preview" className="cta-button-secondary">
              Eigenen Style testen
            </Link>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-aqua/10 animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple/10 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-aqua/10 animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
