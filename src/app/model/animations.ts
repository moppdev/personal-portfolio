import { trigger, state, style, transition, animate } from '@angular/animations';

export const slidingNavAnimation = trigger("slidingAnimation", [
    state('display', style({
        transform: 'translateX(0)'
      })),
      state('exit', style({
        transform: 'translateX(-100%)'
      })),
      transition('display => exit', animate('300ms ease-in-out')),
      transition('exit => display', animate('300ms ease-in-out'))
]);