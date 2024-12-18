import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainSwipeComponent } from './components/main-swipe/main-swipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
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
  {
    path: 'log-in',
    component: LogInComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
