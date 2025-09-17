export default function LoginForm() {
    return (
        <form className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Entrez votre email"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 font-semibold">
                    Mot de passe
                </label>
                <input
                    type="password"
                    id="password"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Entrez votre mot de passe"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
            >
                Se connecter
            </button>
        </form>
    );
}
