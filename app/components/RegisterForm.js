"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmed, setPasswordConfirmed] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Erreur inconnue");
            } else {
                console.log("Login réussi, redirection en cours...");
                router.push("/projects"); // redirige si succès ✅
            }
        } catch (err) {
            setError("Impossible de se connecter");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 w-80 flex flex-col gap-4"
        >
            <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Mot de passe"
                className="border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {/* <input
                type="password-confirmed"
                placeholder="Confirmé votre mot de passe"
                className="border p-2 rounded"
                value={passwordConfirmed}
                onChange={(e) => setPasswordConfirmed(e.target.value)}
                required
            /> */}

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                {loading ? "Connexion..." : "Se connecter"}
            </button>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
    );
}
