import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

// Routes for the website, using lazy loading only for 404s
export const routes: Routes = [
    {
        path: "home",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "education",
        component: EducationComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
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
