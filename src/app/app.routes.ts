import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home-page/home-page.component').then(mod => mod.HomePageComponent) }, 
    { path: 'home', loadComponent: () => import('./home-page/home-page.component').then(mod => mod.HomePageComponent) }
];
