function addNumbers(a: number, b: number): number {
    return a + b;
}

const result : number = addNumbers(5, 10);

console.log({result});

interface Character {
    name: string;
    health: number;

    showHealth: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
    // character.health = character.health + amount;
    character.health += amount;
};

const felix: Character = {
    name: "Salet Yasmin Gutierrez Nava",
    health: 22,
    showHealth: function (): void {
        console.log(`Puntos de vida: " ${this.health}`);
    }
};

healCharacter(felix, 5);
felix.showHealth();

export {};