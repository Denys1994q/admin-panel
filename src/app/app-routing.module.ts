import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { AdminSectionModule } from './admin-section/admin-section.module';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'auth', component: AuthComponent },
    {path: 'admin-section', loadChildren: () => import('./admin-section/admin-section.module').then((m) => m.AdminSectionModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
