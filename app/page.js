import Image from "next/image";
import Button from "./components/Button";
import HomeAction from "./components/HomeActions";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">
                Bienvenue sur TaskFlow 🚀
            </h1>
            <HomeAction />
        </main>
    );
}
