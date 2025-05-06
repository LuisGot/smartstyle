import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
			<div className="page-container flex justify-between items-center">
				<Link to="/" className="flex items-center space-x-2">
					<span className="text-2xl font-bold text-gray-800 flex items-center">
						<img className="size-16" src="smart-style-logo.png" alt="Logo" />
						<span className="text-aqua">Smart</span>
						<span className="text-purple">Style</span>
					</span>
				</Link>
				<div className="hidden md:flex space-x-6">
					<Link to="/" className="text-gray-600 hover:text-aqua font-medium">
						Home
					</Link>
					<Link
						to="/outfit-preview"
						className="text-gray-600 hover:text-aqua font-medium"
					>
						Outfit-Vorschau
					</Link>
					<Link
						to="/ai-fashion-advice"
						className="text-gray-600 hover:text-aqua font-medium"
					>
						KI-Modeberatung
					</Link>
					<Link
						to="/clothing-recognition"
						className="text-gray-600 hover:text-aqua font-medium"
					>
						Kleidungserkennung
					</Link>
				</div>
				<div className="md:hidden">
					<button className="text-gray-600 hover:text-aqua">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="3" y1="12" x2="21" y2="12" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<line x1="3" y1="18" x2="21" y2="18" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
