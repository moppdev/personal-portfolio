import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

// Routes for the website, using lazy loading
export const routes: Routes = [
    {
        path: "",
        component: AboutComponent
    },
    {
        path: "home",
        component: AboutComponent
    },
    {
        path: "contact",
        loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent)
    },
    {
        path: "education",
        loadComponent: () => import('./education/education.component').then(mod => mod.EducationComponent)
    },
    {
        path: "projects",
        loadComponent: () => import('./projects/projects.component').then(mod => mod.ProjectsComponent)
    },
    {
        path: "services",
        loadComponent: () => import("./services-offered/services-offered.component").then(mod => mod.ServicesOfferedComponent)
    },
    {
        path: "**",
        loadComponent: () => import("./four-oh-four/four-oh-four.component").then(mod => mod.FourOhFourComponent)
    }
];
