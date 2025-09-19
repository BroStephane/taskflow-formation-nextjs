import LoginForm from "../components/LoginForm";

export default async function LoginPage() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Connexion</h1>
            <LoginForm />
        </section>
    );
}
