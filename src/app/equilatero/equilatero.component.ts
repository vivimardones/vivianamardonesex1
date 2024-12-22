import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEquilatero } from '../modelo/FiguraGeometrica';

@Component({
  selector: 'app-equilatero',
  standalone: true,
  templateUrl: './equilatero.component.html',
  styleUrls: ['./equilatero.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class EquilateroComponent implements OnInit {
  calcularPerimetroStr: string = '';
  resultado: string = '';
  constructor() {}

  ngOnInit() {}
  calcularPerimetro() {
    const lado = parseInt(this.calcularPerimetroStr);
    const equilatero = new TrianguloEquilatero(lado);
    const perimetro = equilatero.calcularPerimetro();
    this.resultado = `El Perimetro es: ${perimetro}`;
  }
}
