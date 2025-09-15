"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

export default function ProjectList() {
    const [filter, setFilter] = useState("");

    const projects = [
        {
            id: 1,
            name: "TaskFlow App",
            description: "Gestion de projets collaboratifs",
        },
        { id: 2, name: "E-Commerce", description: "Boutique en ligne moderne" },
        {
            id: 3,
            name: "Blog Next.js",
            description: "Articles et commentaires",
        },
    ];

    const filteredProjects = projects.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <SearchBar onSearch={setFilter} />
            <div className="flex gap-4">
                {filteredProjects.length === 0 ? (
                    <p className="text-gray-500 mt-4">Aucun projet trouvé ❌</p>
                ) : (
                    <div className="flex gap-4">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
