"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

export default function ProjectList() {
    const [filter, setFilter] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if (!res.ok) throw new Error("Erreur lors du fetch");
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((p) =>
        p.title.toLowerCase().includes(filter.toLowerCase())
    );

    // const projects = [
    //     {
    //         id: 1,
    //         name: "TaskFlow App",
    //         description: "Gestion de projets collaboratifs",
    //     },
    //     { id: 2, name: "E-Commerce", description: "Boutique en ligne moderne" },
    //     {
    //         id: 3,
    //         name: "Blog Next.js",
    //         description: "Articles et commentaires",
    //     },
    // ];

    // const filteredProjects = projects.filter((p) =>
    //     p.name.toLowerCase().includes(filter.toLowerCase())
    // );

    if (loading) return <p>Chargement...</p>;
    if (error) return <p className="text-red-500">❌ {error}</p>;

    return (
        <div>
            <SearchBar onSearch={setFilter} />
            <div className="flex gap-4">
                {filteredPosts.length === 0 ? (
                    <p className="text-gray-500 mt-4">Aucun projet trouvé ❌</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredPosts.map((post) => (
                            <ProjectCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
