import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({ message: "Déconnecté" });

    res.cookies.set({
        name: "token",
        value: "",
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 0,
    });

    return res;
}
