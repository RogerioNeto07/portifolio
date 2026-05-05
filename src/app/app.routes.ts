import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Resume } from './pages/resume/resume';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projetos', component: Projects },
  { path: 'contato', component: Contact },
  { path: 'curriculo', component: Resume },
];