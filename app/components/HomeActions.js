"use client";

import Button from "./Button";

export default function HomeAction() {
    return (
        <div className="flex gap-4">
            <Button onClick={() => alert("Hello !")}>Cliquer ici</Button>
            <Button variant="secondary">Bouton secondaire</Button>
        </div>
    );
}
