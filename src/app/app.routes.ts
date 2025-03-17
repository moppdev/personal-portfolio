import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Route } from '@angular/router';
import { MobileNavModalComponent } from './mobile-nav-modal/mobile-nav-modal.component';

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
    }
];
