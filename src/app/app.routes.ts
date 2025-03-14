import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

// Routes for the website
export const routes: Routes = [
    {
        path: "",
        component: AboutComponent
    },
    {
        path: "home",
        component: AboutComponent
    }
];
