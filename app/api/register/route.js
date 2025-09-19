import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json(
            { error: "Champs manquants" },
            { status: 400 }
        );
    }

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return NextResponse.json(
            { error: "Email déjà utilisé" },
            { status: 400 }
        );
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { email, password: hashedPassword },
    });

    return NextResponse.json({ message: "Utilisateur créé", userId: user.id });
}
