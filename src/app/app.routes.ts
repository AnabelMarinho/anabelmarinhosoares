import { Routes } from '@angular/router';
import { HomePage } from './page/home-page/home-page';
import { ProjectsPage } from './page/projects-page/projects-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'projects', component: ProjectsPage}
];
