import { Routes } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

export const routes: Routes = [
    { path: '', title: 'The Carnivore Den | Your Carnivore Diet Resource', component: ComingSoonComponent },
    { path: 'getting-started', title: 'Getting Started with Carnivore', component: GettingStartedComponent },
];
