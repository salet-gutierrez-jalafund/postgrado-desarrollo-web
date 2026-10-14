// 4 pilares

// Encapsulamiento: Ocultar los detalles internos y exponer solo lo necesario. 
// // Ocultar los detalles internos de un objeto y exponer solo lo necesario a través de métodos y propiedades públicas. Esto ayuda a proteger el estado interno del objeto y evita que se acceda directamente a sus datos.

// Herencia: Una clase puede heredar propiedades y metodos de otra 
// // Permite que una clase derive de otra, heredando sus propiedades y métodos. Esto fomenta la reutilización de código y la creación de jerarquías de clases.

// Polimorfismo: El mismo metodo puede comportarse diferente en diferentes sbuclases. 
// // Permite que diferentes clases implementen métodos con el mismo nombre pero comportamientos distintos. Esto facilita la flexibilidad y la extensibilidad del código.

// Abstracción: Modelar solo la escencial e ignorar los detalles. 
// // Permite definir interfaces y clases abstractas que establecen un contrato para las clases derivadas. Esto ayuda a centrarse en los aspectos esenciales de un objeto y a ocultar los detalles de implementación.


// class Persona {
//     // Propiedades
//     public nombre: string;
//     public edad: number;

//     // Constructor
//     constructor(nombre: string, edad: number) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     // Métodos
//     saludar(): string {
//         return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
//     }
// }

// const salet = new Persona("Salet Yasmin Gutierrez Nava", 22);
// console.log(salet.saludar());

// // +++++++++++++++++++++++++++++++++++++++

// class Producto{
//     constructor(
//         public nombre: string,
//         public precio: number
//     ){}
// }

// const laptop = new Producto("Laptop", 1500);

// console.log(`Hola, el producto es ${laptop.nombre} y su precio es ${laptop.precio} bs.`);

// // +++++++++++++++++++++++++++++++++++++++

// class BankAccount{
//     constructor(
//         public titular: string,
//         private saldo: number = 0
//     ) {}

//     depositar(monto: number): void {
//         // if (monto > 0) {
//         //     this.saldo += monto;
//         // }
//         if(monto < 0){
//             console.log("El monto debe ser mayor a cero");
//         }

//         this.saldo = monto;
//         console.log(`Deposito de ${monto}. Saldo actual ${this.saldo}`);
//     }

//     retirar(monto: number): boolean {
//         // if(monto <= this.saldo){
//         //     this.saldo -= monto;
//         //     console.log(`Retiro de ${monto}. Saldo actual ${this.saldo}`);
//         //     return true;
//         // }
//         // console.log("Fondos insuficientes");
//         // return false;

//         if(monto > this.saldo){
//             console.log("Fondos insuficientes");
//             return false;
//         }
//         this.saldo -= monto;
//         console.log(`Retiro de ${monto}. Saldo actual ${this.saldo}`);
//         return true;
//     }

//     obtenerSaldo(): number {
//         return this.saldo;
//     }
// }
// // nuances

// const cuentaSalet = new BankAccount("Salet Yasmin Gutierrez Nava");

// cuentaSalet.depositar(10000);
// cuentaSalet.retirar(120);
// cuentaSalet.retirar(160);

// console.log(`Saldo actual: ${cuentaSalet.obtenerSaldo()}`);

// +++++++++++++++++++++++++++++++++++++++

class Student {
    constructor(
        public nombre: string,
        public carnet: string,
        private notas: number[],
        public totalEstudiantes: number
    ) {}

    agregarNota(nota: number): void {
        this.notas.push(nota);
    }

    calcularPromedio(): number {
        if(this.notas.length === 0){
            return 0;
        }
        let suma = 0;
        for(const notas of this.notas){
            suma += notas;
        }

        return suma / this.notas.length;
    }

    obtenerEstado(): string {
        const promedio = this.calcularPromedio();
        if (promedio >= 50) {
            return "Aprobado";
        } else {
            return "Reprobado";
        }
    }

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Carnet: ${this.carnet}`);
        console.log(`Notas: ${this.notas.join(", ")}`);
        console.log(`Promedio: ${this.calcularPromedio()}`);
        console.log(`Total de estudiantes: ${this.totalEstudiantes}`);
    }
}

const estudiante1 = new Student("Salet Yasmin Gutierrez Nava", "13594439", [80, 90, 70], 1);
estudiante1.agregarNota(85);
estudiante1.mostrarInformacion();
console.log(`Estado: ${estudiante1.obtenerEstado()}`);

export {};