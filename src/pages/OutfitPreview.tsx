import { useState } from "react";
import { outfitPreviewOptions } from "../lib/mockData";

const OutfitPreview = () => {
	const [uploadedImage, setUploadedImage] = useState<string | null>(null);
	const [selectedOutfit, setSelectedOutfit] = useState(outfitPreviewOptions[0]);
	const [showResult, setShowResult] = useState<boolean>(false);

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target && typeof e.target.result === "string") {
					setUploadedImage(e.target.result);
				}
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (uploadedImage) {
			setShowResult(true);
		}
	};

	return (
		<div className="min-h-screen py-12 bg-gray-50">
			<div className="page-container">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">
						Outfit-Vorschau mit eigenem Bild
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						Lade ein Foto von dir hoch und sieh, wie verschiedene Outfits an dir
						aussehen könnten.
					</p>

					{!showResult ? (
						<div className="bg-white rounded-2xl shadow-soft p-6">
							<form onSubmit={handleSubmit}>
								{/* Upload Section */}
								<div className="mb-8">
									<h3 className="text-xl font-semibold mb-4">
										1. Lade dein Bild hoch
									</h3>
									<div
										className={`border-2 border-dashed rounded-xl p-8 text-center ${
											uploadedImage
												? "border-aqua"
												: "border-gray-300 hover:border-aqua"
										} transition-colors`}
									>
										{uploadedImage ? (
											<div className="relative max-w-sm mx-auto">
												<img
													src={uploadedImage}
													alt="Uploaded"
													className="rounded-lg max-h-64 mx-auto"
												/>
												<button
													type="button"
													onClick={() => setUploadedImage(null)}
													className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<line x1="18" y1="6" x2="6" y2="18"></line>
														<line x1="6" y1="6" x2="18" y2="18"></line>
													</svg>
												</button>
											</div>
										) : (
											<>
												<div className="text-5xl mb-4 text-gray-300">📷</div>
												<p className="text-gray-500 mb-4">
													Ziehe dein Bild hierher oder
												</p>
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
								</div>

								{/* Outfit Selection */}
								{uploadedImage && (
									<div className="mb-8">
										<h3 className="text-xl font-semibold mb-4">
											2. Wähle einen Style
										</h3>
										<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
											{outfitPreviewOptions.map((outfit, index) => (
												<div
													key={index}
													onClick={() => setSelectedOutfit(outfit)}
													className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
														selectedOutfit.style === outfit.style
															? "bg-purple/10 border-purple"
															: "bg-gray-50 border-gray-100 hover:border-purple/30"
													}`}
												>
													<div className="flex items-center justify-center">
														<span className="font-medium">{outfit.style}</span>
													</div>
												</div>
											))}
										</div>
									</div>
								)}

								{uploadedImage && (
									<div className="text-center">
										<button type="submit" className="cta-button">
											Outfit generieren
										</button>
									</div>
								)}
							</form>
						</div>
					) : (
						<div className="bg-white rounded-2xl shadow-soft p-6">
							<h2 className="text-2xl font-bold mb-6 text-center">
								Dein neues Outfit ist da!
							</h2>

							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<div className="relative rounded-xl overflow-hidden mb-4">
										<img
											src={uploadedImage}
											alt="Your photo"
											className="w-full"
										/>
										<div className="absolute inset-0 bg-gradient-to-b from-purple/20 to-aqua/20 pointer-events-none"></div>
									</div>
									<h3 className="font-medium text-lg mb-1">Original</h3>
									<p className="text-gray-500 text-sm">
										Dein hochgeladenes Bild
									</p>
								</div>

								<div>
									<div className="relative rounded-xl overflow-hidden mb-4">
										<img
											src={`${import.meta.env.BASE_URL}${selectedOutfit.img}`}
											alt="Generated outfit"
											className="w-full"
										/>
										{/* <div className="absolute inset-0 bg-gradient-to-t from-purple/40 to-aqua/30 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <p className="text-white font-medium text-lg">
                        {selectedOutfit.style} (Vorschau)
                      </p>
                    </div> */}
									</div>
									<h3 className="font-medium text-lg mb-1">
										Neuer Look: {selectedOutfit.style}
									</h3>
									<p className="text-gray-500 text-sm">
										Sieht so dein Outfit aus?
									</p>
								</div>
							</div>

							<div className="mt-8 text-center">
								<p className="text-lg mb-6">
									Gefällt dir dieser Style? Probiere weitere Outfits aus!
								</p>
								<div className="flex flex-col sm:flex-row justify-center gap-4">
									<button
										onClick={() => setShowResult(false)}
										className="cta-button"
									>
										Weiteren Style testen
									</button>
									<button className="border-2 border-purple text-purple font-medium py-3 px-6 rounded-lg hover:bg-purple/5 transition-colors duration-200">
										Outfit speichern
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default OutfitPreview;
