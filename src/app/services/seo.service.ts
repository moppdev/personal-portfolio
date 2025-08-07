import { Meta, Title } from "@angular/platform-browser";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SeoService
{
    // Service that allows for basic SEO management in Angular applications.
    // It uses Angular's Meta service to add meta tags for SEO purposes.
    constructor(private metaService: Meta, private titleService: Title) {}

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
            { property: 'og:url', content: 'https://mopp.co.za' },
            { property: 'og:image', content: 'https://mopp.co.za/marco_mobile.jpg'}
        ]);
    }

    // Set page title and update specific meta tags for different pages
    updatePageSEO(title: string, description: string, url: string) {
        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ property: 'og:url', content: `https://mopp.co.za${url}` });
    }

    // Add Twitter Card tags for better social sharing
    addTwitterCards() {
        this.metaService.addTags([
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Marco Oppel | Web Developer Portfolio' },
            { name: 'twitter:description', content: 'Explore the projects and skills of Marco Oppel, a web developer crafting responsive and accessible digital solutions.' },
            { name: 'twitter:image', content: 'https://mopp.co.za/marco_mobile.jpg' }
        ]);
    }
}