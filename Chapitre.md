# 🔑 Adaptation du plan (sans TS, avec Tailwind)

Voici la version simplifiée du programme avec notre projet **TaskFlow** :

---

## Chapitre 1 – Mise en place

-   Créer un projet Next.js avec `npx create-next-app@latest`.
-   Ajouter **TailwindCSS**.
-   Découverte du dossier `app/`.
-   Créer les premières pages (`/`, `/about`).

✅ **Exercice** : une page d’accueil avec un layout de base (header/footer).

---

## Chapitre 2 – Composants & navigation

-   Créer des composants réutilisables (boutons, cartes, navbar).
-   Layout global avec `app/layout.js`.
-   Navigation avec `Link` et `useRouter`.

✅ **Exercice** : créer une navbar avec liens + état actif.

---

## Chapitre 3 – Données & rendering

-   Comprendre **Server Components** et **Client Components**.
-   Fetch de données dans un composant serveur (`async function`).
-   Revalidation des données (`revalidatePath`).

✅ **Exercice** : afficher une liste de projets depuis une API fake (JSONPlaceholder).

---

## Chapitre 4 – Authentification

-   Mettre en place **NextAuth.js** (Auth.js).
-   Login avec Google ou GitHub (plus simple que password).
-   Protéger des pages avec un middleware.

✅ **Exercice** : obliger l’utilisateur à se connecter pour accéder à `/dashboard`.

---

## Chapitre 5 – Base de données

-   Installer **PostgreSQL + Prisma**.
-   Définir nos modèles (`User`, `Project`, `Task`).
-   Migrer et seeder la DB.
-   Lire les projets en base.

✅ **Exercice** : afficher uniquement les projets de l’utilisateur connecté.

---

## Chapitre 6 – API & server actions

-   Créer une **API route** (`app/api/projects/route.js`).
-   Créer une **Server Action** pour ajouter un projet directement depuis un formulaire.
-   Valider les entrées (simple regex ou Zod si on veut).

✅ **Exercice** : formulaire _“ajouter projet”_ qui écrit en BDD.

---

## Chapitre 7 – Interaction & temps réel

-   Gérer le **drag & drop** avec un board Kanban.
-   Ajouter un provider temps réel (**Pusher** ou **Supabase Realtime**).
-   Optimistic updates pour fluidité.

✅ **Exercice** : déplacer une tâche dans une autre colonne en temps réel.

---

## Chapitre 8 – Optimisation

-   Lazy loading avec `dynamic()`.
-   Optimiser images (`next/image`).
-   **Streaming** (Suspense).

✅ **Exercice** : page de projets avec streaming et skeleton loader.

---

## Chapitre 9 – Admin & rôles

-   Ajouter un rôle **admin** dans Prisma.
-   Créer un dashboard admin.
-   Filtrer les pages selon rôle.

✅ **Exercice** : l’admin peut supprimer des utilisateurs.

---

## Chapitre 10 – Déploiement

-   Déployer sur **Vercel**.
-   Connecter la base PostgreSQL sur **Supabase** ou **Railway**.
-   Vérifier l’app en prod.

✅ **Exercice** : mettre en ligne ton app et tester avec un compte Google.
