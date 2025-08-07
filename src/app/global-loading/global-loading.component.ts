import { Component, inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-global-loading',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './global-loading.component.html',
  styleUrl: './global-loading.component.scss'
})
export class GlobalLoadingComponent {
  loadingService = inject(LoadingService);
}
