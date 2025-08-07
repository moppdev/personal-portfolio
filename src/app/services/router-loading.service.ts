import { Injectable, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class RouterLoadingService {
  private router = inject(Router);
  private loadingService = inject(LoadingService);

  init() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show loading immediately when navigation starts
        this.loadingService.show();
      } else if (event instanceof NavigationEnd || 
                 event instanceof NavigationCancel || 
                 event instanceof NavigationError) {
        // Hide loading after a minimum duration to avoid flicker
        setTimeout(() => {
          this.loadingService.hide();
        }, 600);
      }
    });
  }
}
