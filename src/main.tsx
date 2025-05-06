import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// --- GitHub Pages SPA redirect helper ---
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
	// Extract path, query, and hash from the stored redirect URL
	const url = new URL(redirect, location.origin);
	const path = url.searchParams.get("p");
	const query = url.searchParams.get("q");
	const hash = url.hash;

	if (path) {
		// Use history.replaceState to change the URL without reloading
		// Prepend BASE_URL which is needed by BrowserRouter's basename
		const targetUrl =
			import.meta.env.BASE_URL + path + (query ? `?${query}` : "") + hash;
		history.replaceState(null, "", targetUrl);
	}
}
// --- End helper ---

createRoot(document.getElementById("root")!).render(<App />);
