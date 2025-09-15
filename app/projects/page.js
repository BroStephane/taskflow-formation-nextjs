import ProjectList from "../components/ProjectsList";

export default function ProjectsPage() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Mes projets</h2>
            {/* <p className="text-gray-700">
                Bientôt, vous verrez vos projets ici 🚀
            </p> */}
            <ProjectList />
        </section>
    );
}
