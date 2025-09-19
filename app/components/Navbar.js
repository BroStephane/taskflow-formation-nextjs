"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Accueil" },
        { href: "/about", label: "A propos" },
        { href: "/projects", label: "Projets" },
        { href: "/posts", label: "Posts" },
        {href:"/register", label: "S'inscrire"}
    ];

    return (
        <nav className="flex gap-4">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md transition 
                    ${
                        pathname == link.href
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
