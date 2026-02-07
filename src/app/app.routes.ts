import { Routes } from '@angular/router';
import { Home } from './home/home';

import { GetAnimalsParEspece } from './queries/animal/get-animal-par-espece/get-animal-par-espece';
import { GetAnimalsParNom } from './queries/animal/get-animal-par-nom/get-animal-par-nom';
import { GetBenevoleBySurname } from './queries/benevole/get-benevole-by-surname/get-benevole-by-surname';
import { CreateAnimal } from './commands/animal/create-animal/create-animal';

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
path: 'home',
component: Home,
title: 'Accueil(parcequechut)'
},
{
    path: 'animal/espece/:espece',
    component: GetAnimalsParEspece,
    title: 'espèces'
},
{
    path: 'animal/nom/:nom',
    component: GetAnimalsParNom,
    title: 'noms'
},
{
    path: 'benevole/prenom/:prenom',
    component: GetBenevoleBySurname,
    title: 'prenoms'
},
{
    path: 'animal/create',
    component: CreateAnimal,
    title: 'create-animal'
}

];
