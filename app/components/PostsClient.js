"use client";

import { useEffect, useState } from "react";

export default function PostsClient() {
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

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Aucune donnée trouvé</p>;

    return (
        <ul className="list-disc pl-6">
            {posts.slice(0, 5).map((post) => (
                <li key={post.id}>
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-gray-600">{post.body}</p>
                </li>
            ))}
        </ul>
    );
}
