import { Routes } from '@angular/router';
import { Home } from './home/home'
import { GetAnimalsByEspece } from './queries/animal/get-animal-by-espece/get-animal-by-espece';

export const routes: Routes = [
{
path: 'home',
component: Home,
title: 'Accueil(parcequechut)'
},
{
    path: 'animal/espece/:espece',
    component: GetAnimalsByEspece,
    title: 'espèces'
}

];
