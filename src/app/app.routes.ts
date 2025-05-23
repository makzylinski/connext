import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainSwipeComponent } from './components/main-swipe/main-swipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountSettingsComponent } from './components/settings/account-settings/account-settings.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainSwipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
      },
      {
        path: 'app-settings',
        component: SettingsComponent,
      },
    ],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'log-in',
    component: LogInComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
