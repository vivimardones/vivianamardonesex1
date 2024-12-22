import { Component } from '@angular/core';
import { CirculoComponent } from '../circulo/circulo.component';
import { EquilateroComponent } from '../equilatero/equilatero.component';
import { EscalenoComponent } from '../escaleno/escaleno.component';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { IonSelectCustomEvent, SelectChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    CirculoComponent,
    EquilateroComponent,
    EscalenoComponent,
    IonSelect, 
    IonSelectOption],
})
export class HomePage {
  figura: string = "";

  constructor() {}

  esCirculo() { return this.figura === 'circulo'; }
  esEquilatero() { return this.figura === 'equilatero'; }
  esEscaleno() { return this.figura === 'escaleno'; }

  selecioneFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    console.log('Selecionou a figura');
  }
}
