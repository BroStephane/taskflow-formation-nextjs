"use client";

export default function Button({ children, onClick, variant = "primary" }) {
    const base =
        "px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary:
            "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
    };

    return (
        <button onClick={onClick} className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    );
}
