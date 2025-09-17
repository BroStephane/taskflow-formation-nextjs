import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export async function POST(req) {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
        return NextResponse.json(
            { error: "Utilisateur non trouvé" },
            { status: 404 }
        );

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
        return NextResponse.json(
            { error: "Mot de passe incorrect" },
            { status: 401 }
        );

    const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });

    const res = NextResponse.json({ message: "Connecté" });
    res.cookies.set("token", token, { httpOnly: true, secure: true });
    return res;
}
