import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
    title: "TaskFlow",
    description: "Gestion de projets aec Next.JS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="bg-white text-gray-900">
                <header className="p-4 bg-gray-100 border-b">
                    <div>
                        <h1 className="text-xl font-semibold text-blue-600">TaskFlow</h1>
                        <Navbar />
                    </div>
                </header>
                <main className="p-6">{children}</main>
                <footer className="p-4 bg-gray-200 text-center text-sm text-gray-900">
                    © 2025 TaskFlow - Tous droits réservés
                </footer>
            </body>
        </html>
    );
}
