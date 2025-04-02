import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { EducationComponent } from './education/education.component';

// Routes for the website, using lazy loading for most routes
export const routes: Routes = [
    {
        path: "home",
        component: AboutComponent
    },
    {
        path: "contact",
        loadComponent: () => import("./contact/contact.component").then(mod => mod.ContactComponent)
    },
    {
        path: "education",
        component: EducationComponent
    },
    {
        path: "projects",
        loadComponent: () => import("./projects/projects.component").then(mod => mod.ProjectsComponent)
    },
    {
        path: "services",
        component: ServicesOfferedComponent
    },
    {
        path: "**",
        loadComponent: () => import("./four-oh-four/four-oh-four.component").then(mod => mod.FourOhFourComponent)
    }
];
