import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'predictions',
    loadComponent: () =>
      import('./pages/predictions/predictions.component').then(
        (m) => m.PredictionsComponent
      ),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./pages/matches-results/matches-results.component').then(
        (m) => m.MatchesResultsComponent
      ),
  },
];
