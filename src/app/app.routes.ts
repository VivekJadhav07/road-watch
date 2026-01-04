import { Routes } from '@angular/router';
import { RoadDetail } from './road-detail/road-detail';

export const routes: Routes = [
  { path: 'road/:id', component: RoadDetail },
  { path: '', redirectTo: '/road/101', pathMatch: 'full' }
];