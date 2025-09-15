"use client";

import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

export default function ProjectCard({ project }) {
    const [count, setCount] = useState(0);
    return (
        <div className="bg-gray-100 w-fit p-4 rounded-2xl shadow">
            <div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
            <button
                className="flex items-center gap-2 text-blue-600 text-2xl hover:text-red-500 transition"
                onClick={() => setCount(count + 1)}
            >
                <IoIosHeart />
                <span className="text-gray-900 text-base">{count}</span>
            </button>
        </div>
    );
}
