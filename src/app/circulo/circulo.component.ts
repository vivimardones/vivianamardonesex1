import { Component, input, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/FiguraGeometrica';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class CirculoComponent implements OnInit {
  calcularPerimetroStr: string = '';
  resultado: string = '';
  constructor() {}

  ngOnInit() {}
  calcularPerimetro() {
    const radio = parseInt(this.calcularPerimetroStr);
    const circulo = new Circulo(radio);
    const perimetro = circulo.calcularPerimetro().toFixed(2);
    this.resultado = `El Perimetro es: ${perimetro}`;
  }
}
