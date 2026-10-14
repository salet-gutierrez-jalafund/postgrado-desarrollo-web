interface AudioPlayer {
    volume: number;
    duration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const akitaDiscman: AudioPlayer = {
    volume: 90,
    duration: 200,
    song: "Mess",
    details: {
        author: "The Beatles",
        year: 1965
    }
};

const { song, duration, details } = akitaDiscman;

console.log(`Song: ${song}`);
console.log(`Duration: ${duration}`);
console.log(`Author: ${details.author}`);
console.log(`Year: ${details.year}`);

export {};