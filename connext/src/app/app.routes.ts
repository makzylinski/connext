import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainSwipeComponent } from './components/main-swipe/main-swipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainSwipeComponent,
    canActivate: [AuthGuard],
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
