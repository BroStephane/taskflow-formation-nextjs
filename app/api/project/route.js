import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
    const token = req.cookies.get("token")?.value;
    if (!token)
        return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

    try {
        const { payload } = await jwtVerify(token, SECRET);

        const projects = await prisma.project.findMany({
            where: { userId: payload.userId },
            include: { tasks: true },
        });

        return NextResponse.json(projects);
    } catch (err) {
        return NextResponse.json({ error: "Token invalide" }, { status: 401 });
    }
}
