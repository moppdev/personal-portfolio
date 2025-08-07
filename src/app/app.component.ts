import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SeoService } from './services/seo.service';
import { GlobalLoadingComponent } from './global-loading/global-loading.component';
import { RouterLoadingService } from './services/router-loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavComponent, GlobalLoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  seo = inject(SeoService);
  routerLoading = inject(RouterLoadingService);

  ngOnInit() {
    // Initialize global SEO tags once
    this.seo.getSEO();
    this.seo.addTwitterCards();
    
    // Initialize router loading service
    this.routerLoading.init();
  }
}
