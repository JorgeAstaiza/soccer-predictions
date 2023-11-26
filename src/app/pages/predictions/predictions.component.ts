import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PredictionService } from './service/prediction.service';
import { HttpClientModule } from '@angular/common/http';
import { Country } from '../../shared/interfaces/country.interface';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-predictions',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [PredictionService],
  templateUrl: './predictions.component.html',
  styleUrl: './predictions.component.scss',
})
export class PredictionsComponent {
  public countrys: Country[] = [];
  countries = new FormControl(false);
  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.predictionService.getCountrys().subscribe((data) => {
      console.log(data);
      this.countrys = data.response;
    });
  }

  loadData() {
    // Cargar más datos
  }

  onSelectOpen(event: boolean) {
    if (event) {
      // El mat-select se ha abierto, podrías realizar alguna lógica aquí si es necesario
    }
  }
  onSelectScroll(event: Event) {
    // Lógica de detección de desplazamiento dentro del mat-select
    const element = event.target as HTMLElement;
    console.log(element.scrollTop, element.clientHeight, element.scrollHeight);

    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      this.loadData(); // Cargar más datos si es necesario
    }
  }
}
