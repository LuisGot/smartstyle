// lib/mockData.ts
// Using public folder for images with simple string paths

export interface TrendProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string; // Image URLs as strings
	availability: "online" | "inStore" | "both";
	location?: string;
	colorVariant?: "aqua" | "purple";
}

export interface FeatureCardData {
	// Renamed from FeatureCard to avoid conflict with component name
	title: string;
	description: string;
	icon: string; // Keep as emoji or map to icon names
	link: string; // Route name for expo-router
}

export const trendProducts: TrendProduct[] = [
	{
		id: "1",
		name: "Oversize T-Shirt",
		description: "Urban Style Cotton Blend",
		price: 29.99,
		image: "images/oversized-tshirt.png",
		availability: "both",
		location: "H&M München",
		colorVariant: "aqua",
	},
	{
		id: "2",
		name: "Vintage Shorts",
		description: "High-Waist, Retro Look",
		price: 59.99,
		image: "images/baggy-shorts.jpg",
		availability: "online",
		location: "Zalando",
		colorVariant: "purple",
	},
	{
		id: "3",
		name: "Dunks",
		description: "Nachhaltig & Trendy",
		price: 89.99,
		image: "images/dunks.jpg",
		availability: "inStore",
		location: "Footlocker Berlin",
		colorVariant: "aqua",
	},
	{
		id: "4",
		name: "Seidenschal",
		description: "Leicht & Elegant",
		price: 24.99,
		image: "images/seidenschal.jpg",
		availability: "both",
		location: "Zara Frankfurt",
		colorVariant: "purple",
	},
	{
		id: "5",
		name: "Leder Crossbody Bag",
		description: "Vegan & Minimalistisch",
		price: 49.99,
		image: "images/leder-crossbody-bag.webp",
		availability: "online",
		location: "About You",
		colorVariant: "aqua",
	},
	{
		id: "6",
		name: "Oversized Blazer",
		description: "Business Casual Style",
		price: 79.99,
		image: "images/oversized-blazer.webp",
		availability: "both",
		location: "Mango Hamburg",
		colorVariant: "purple",
	},
];

export const featuresList: FeatureCardData[] = [
	{
		title: "Outfit-Vorschau",
		description: "Lade dein Bild hoch und probiere neue Styles virtuell an",
		icon: "👕",
		link: "/outfit-preview", // Use route path
	},
	{
		title: "KI-Modeberatung",
		description: "Lade ein Inspiration-Bild hoch und erhalte ähnliche Styles",
		icon: "🤖",
		link: "/ai-fashion-advice", // Use route path
	},
	{
		title: "Kleidungserkennung",
		description: "Finde heraus, was jemand trägt und wo du es kaufen kannst",
		icon: "🔍",
		link: "/clothing-recognition", // Use route path
	},
];

// Fixed the type for similarProducts
export const similarProducts: TrendProduct[] = [
	{
		id: "s1",
		name: "Budget T-Shirt",
		description: "Ähnlicher Style, günstigerer Preis",
		price: 12.99,
		image: "images/placeholder.png",
		availability: "online",
		location: "Primark Online",
	},
	{
		id: "s2",
		name: "Premium T-Shirt",
		description: "Hochwertige Alternative",
		price: 49.99,
		image: "images/placeholder.png",
		availability: "both",
		location: "COS",
	},
];

export const outfitPreviewOptions = [
	{
		style: "Casual Style",
		img: "images/model-mock-casual.webp",
	},
	{
		style: "Business Look",
		img: "images/model-mock-business.webp",
	},
	{
		style: "Abend Outfit",
		img: "images/model-mock-abend.webp",
	},
	{
		style: "Sportlicher Look",
		img: "images/model-mock-sport.webp",
	},
	{
		style: "Festival Style",
		img: "images/model-mock-festival.webp",
	},
	{
		style: "Vintage Look",
		img: "images/model-mock-vintage.webp",
	},
];
