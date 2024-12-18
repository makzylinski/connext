import { Routes } from '@angular/router';
import { MainSwipeComponent } from './components/main-swipe/main-swipe.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: MainSwipeComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];
