const skills : string[] = [
    "Code",
    "Violin",
    "Reading",
];

interface Character {
    name: string;
    health: number;
    skills: string[];
    hometown?: string;
}

const character : Character = {
    name: "Salet Yasmin Gutierrez Nava",
    health: 50,
    skills: skills,
    hometown: "Bolivia"
}

console.table(character);

export {};