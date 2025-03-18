import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Route } from '@angular/router';
import { MobileNavModalComponent } from './mobile-nav-modal/mobile-nav-modal.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

// Routes for the website
export const routes: Routes = [
    // {
    //     path: "**",
    //     loadComponent() {
    //         return 
    //     },
    // }
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
        component: ContactComponent
    },
    {
        path: "education",
        component: EducationComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    }
];
