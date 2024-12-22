export abstract class FiguraGeometrica {
    abstract calcularPerimetro(): number;
}

export class Circulo extends FiguraGeometrica {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }
    
    override calcularPerimetro(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
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

export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(ladoA: number) {
        super(ladoA, ladoA, ladoA);
        this.ladoA = ladoA;
    }
    override calcularPerimetro(): number {
        return this.ladoA * 3;
    }   

}