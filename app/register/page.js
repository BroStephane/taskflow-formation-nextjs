import RegisterForm from "../components/RegisterForm";

export default function registerPage() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Inscription</h1>
            <RegisterForm />
        </section>
    );
}
