import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanComponent } from './pages/plan/plan.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/singup.component';
import { BasicPlanComponent } from './pages/basic-plan/basic-plan.component';
import { RomanticoPlanComponent } from './pages/romantico-plan/romantico-plan.component';
import { ApaixonadoPlanComponent } from './pages/apaixonado-plan/apaixonado-plan.component';
import { InMemoryScrollingOptions } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { SubscriptionGuard } from './guards/subscription.guard';
import { NoSubComponent } from './pages/no-sub/no-sub.component';
import { AllPlansComponent } from './pages/all-plans/all-plans.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'plans/basico', component: BasicPlanComponent },
  { path: 'plans/romantico', component: RomanticoPlanComponent },
  { path: 'plans/apaixonado', component: ApaixonadoPlanComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: PlanComponent, canActivate: [AuthGuard, SubscriptionGuard] },
  { path: 'contato', component: ContactComponent },
  { path: 'getSub', component: NoSubComponent },
  { path: 'plans', component: AllPlansComponent }
];

export const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
