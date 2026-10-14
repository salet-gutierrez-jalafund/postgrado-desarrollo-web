interface Address {
    street: string;
    country: string;
    city: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

// Reto: Crear un objeto con las interfaces previas arriba 
// Imprimir en consola de la mejor manera el metodo showAddress()

const iroMan: SuperHero = {
    name: "Iron Man",
    age: 45,

    address: {
        street: "10880 Malibu Point",
        country: "USA",
        city: "Los Angeles",
    },

    showAddress: function (): string {
        return `${this.name} vive en ${this.address.street}, ${this.address.city}, ${this.address.country}`;
    }
};

console.log(iroMan.showAddress());

export {};