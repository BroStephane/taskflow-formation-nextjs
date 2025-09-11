import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">
                Bienvenue sur TaskFlow 🚀
            </h1>
            <p className="mt-4 text-lg text-gray-700">
                Votre app Next.JS est prête !
            </p>
        </main>
    );
}
