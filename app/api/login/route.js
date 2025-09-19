import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

import { SignJWT } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
        return NextResponse.json(
            { error: "Utilisateur non trouvé" },
            { status: 404 }
        );

    // Vérification du mot de passe (bcrypt inchangé)
    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
        return NextResponse.json(
            { error: "Mot de passe incorrect" },
            { status: 401 }
        );

    // Création du JWT avec jose
    const token = await new SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(SECRET);

    const res = NextResponse.json({ message: "Connecté" });
    res.cookies.set("token", token, { httpOnly: true, secure: true });
    return res;
}
