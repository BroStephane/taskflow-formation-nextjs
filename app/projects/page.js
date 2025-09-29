// import ProjectList from "../components/ProjectsList";

// export default function ProjectsPage() {
//     return (
//         <section className="flex flex-col gap-4">
//             <h2 className="text-2xl font-bold">Mes projets</h2>
//             {/* <p className="text-gray-700">
//                 Bientôt, vous verrez vos projets ici 🚀
//             </p> */}
//             <ProjectList />
//         </section>
//     );
// }



import { prisma } from "@/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    include: { tasks: true, user: true },
  });

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projets</h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-500">
              Créé par : {project.user.email}
            </p>
            <ul className="list-disc pl-6">
              {project.tasks.map((task) => (
                <li key={task.id}>
                  {task.title} {task.done ? "✅" : "⏳"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
