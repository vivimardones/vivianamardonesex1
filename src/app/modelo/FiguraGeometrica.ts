abstract class FiguraGeometrica {
    abstract calcularPerimetro(): number;
}

class Circulo extends FiguraGeometrica {
    private tipo: string;
    private radio: number;

    constructor(tipo:string, radio: number) {
        super();
        this.tipo = tipo;
        this.radio = radio;
    }
    
    getTipo(): string { return this.tipo; }

    calcularPerimetro(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class TrianguloEscaleno extends FiguraGeometrica {
   protected ladoA: number;
   protected ladoB: number;
   protected ladoC: number;
   
   constructor(ladoA: number, ladoB: number, ladoC: number) {
       super();
       this.ladoA = ladoA;
       this.ladoB = ladoB;
       this.ladoC = ladoC;
   }
   override calcularPerimetro(): number {
         return this.ladoA + this.ladoB + this.ladoC;
   }
}

class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(ladoA: number) {
        super(ladoA, ladoA, ladoA);
        this.ladoA = ladoA;
    }
    override calcularPerimetro(): number {
        return this.ladoA * 3;
    }   

}