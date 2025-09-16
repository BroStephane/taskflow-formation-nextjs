import PostsClient from "../components/PostsClient";

export default async function PostPage() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    // ------------------------------------------------------------------------\\
    // Désactiver le cache (toujours fresh)
    // ------------------------------------------------------------------------\\
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //     cache: "no-store",
    // });

    // ------------------------------------------------------------------------\\
    // Revalidation automatique (ISR = Incremental Static Regeneration)
    // ------------------------------------------------------------------------\\
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //     next: { revalidate: 10 },
    // });

    // const posts = await res.json();

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Articles</h2>
            {/* <ul className="list-disc pl-6">
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-gray-600">{post.body}</p>
                    </li>
                ))}
            </ul> */}
            <PostsClient />
        </section>
    );
}
