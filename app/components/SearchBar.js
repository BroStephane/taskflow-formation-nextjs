"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ onSearch }) {
    const [filter, setFilter] = useState("");

    return (
        <div className="flex border-2  rounded-full p-2 w-2xl">
            <div className="text-2xl">
                <IoIosSearch />
            </div>
            <input
                type="text"
                placeholder="Rechercher"
                className="w-full"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}
