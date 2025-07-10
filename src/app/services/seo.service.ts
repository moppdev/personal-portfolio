import { Meta } from "@angular/platform-browser";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SeoService
{
    constructor(private metaService: Meta) {}

    getSEO()
    {
        this.metaService.addTags([
            { name: 'description', content: 'Marco Oppel is a passionate web developer specializing in modern, and accessible websites using Angular, React and other tools.' },
            { name: 'author', content: 'Marco Oppel' },
            { name: 'keywords', content: 'web developer, Angular, React, TypeScript, full-stack, South Africa, portfolio, Marco Oppel, C#' },
            { name: 'robots', content: 'index, follow' },

            // Open Graph
            { property: 'og:title', content: 'Marco Oppel | Web Developer Portfolio' },
            { property: 'og:description', content: 'Explore the projects and skills of Marco Oppel, a web developer crafting responsive and accessible digital solutions.' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://maropp-portfolio.vercel.app' },
            { property: 'og:image', content: 'https://maropp-portfolio.vercel.app/marco_mobile.jpg'}
        ]);
    }
}