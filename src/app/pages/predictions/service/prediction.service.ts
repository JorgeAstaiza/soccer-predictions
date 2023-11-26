import { Injectable } from '@angular/core';
import { ApiSoccer } from '../../../api';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../../shared/interfaces/api-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  apiKey = ApiSoccer.key;
  endpoint = ApiSoccer.endpoint;

  constructor(private http: HttpClient) {}

  getCountrys(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.endpoint}countries`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': this.apiKey,
      },
    });
  }
}
