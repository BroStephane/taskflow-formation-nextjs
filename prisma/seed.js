import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    // 🔹 1. Nettoyage (évite doublons si tu relances)
    await prisma.task.deleteMany();
    await prisma.project.deleteMany();
    await prisma.user.deleteMany();

    // 🔹 2. Création d'utilisateurs
    const passwordHash = await bcrypt.hash("password123", 10);

    const user1 = await prisma.user.create({
        data: {
            email: "alice@example.com",
            password: passwordHash,
            projects: {
                create: [
                    {
                        name: "TaskFlow App",
                        tasks: {
                            create: [
                                { title: "Installer Next.js", done: true },
                                { title: "Configurer Prisma", done: false },
                                {
                                    title: "Faire l’authentification",
                                    done: false,
                                },
                            ],
                        },
                    },
                ],
            },
        },
        include: { projects: true },
    });

    const user2 = await prisma.user.create({
        data: {
            email: "bob@example.com",
            password: passwordHash,
            projects: {
                create: [
                    {
                        name: "E-commerce",
                        tasks: {
                            create: [
                                {
                                    title: "Créer la page d’accueil",
                                    done: true,
                                },
                                {
                                    title: "Mettre en place Stripe",
                                    done: false,
                                },
                            ],
                        },
                    },
                    {
                        name: "Blog Next.js",
                        tasks: {
                            create: [
                                {
                                    title: "Rédiger premier article",
                                    done: false,
                                },
                                {
                                    title: "Ajouter les commentaires",
                                    done: false,
                                },
                            ],
                        },
                    },
                ],
            },
        },
        include: { projects: true },
    });

    console.log("Seed terminé ✅");
    console.log({ user1, user2 });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
