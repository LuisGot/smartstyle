
import { Link } from "react-router-dom";
import { FeatureCard as FeatureCardType } from "../lib/mockData";

interface FeatureCardProps {
  feature: FeatureCardType;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  // Alternate between aqua and purple for card accents
  const isEven = index % 2 === 0;
  const accentColor = isEven ? "aqua" : "purple";
  
  return (
    <Link 
      to={feature.link}
      className="bento-card p-6 flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`text-4xl mb-4 ${isEven ? 'text-aqua' : 'text-purple'}`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-600 mb-4">{feature.description}</p>
      <div className="mt-auto">
        <span className={`text-${accentColor} font-medium flex items-center`}>
          Ausprobieren
          <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default FeatureCard;
