import { Component, OnInit } from '@angular/core';
import {
  IonList,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/FiguraGeometrica';

@Component({
  selector: 'app-escaleno',
  standalone: true,
  templateUrl: './escaleno.component.html',
  styleUrls: ['./escaleno.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton],
})
export class EscalenoComponent  implements OnInit {
  ladoA: string = '';
  ladoB: string = '';
  ladoC: string = '';
  resultado: string = '';
  constructor() { }

  ngOnInit() {}
  calcularPerimetro() {
    const ladoA = parseInt(this.ladoA);
    const ladoB = parseInt(this.ladoB);
    const ladoC = parseInt(this.ladoC);
    const escaleno = new TrianguloEscaleno(ladoA, ladoB, ladoC);
    const perimetro = escaleno.calcularPerimetro();
    this.resultado = `El Perimetro es: ${perimetro}`;
  }
}
