import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
    {
        path: 'account',
        loadChildren: './pages/account/account.module#AccountModule'
    },
    {
        path: 'support',
        loadChildren: './pages/support/support.module#SupportModule'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
    },
    {
        path: 'signup',
        loadChildren: './pages/signup/signup.module#SignUpModule'
    },
    {
        path: 'tutorial',
        loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
        canLoad: [CheckTutorial]
    },
    {
        path: 'tabs',
        loadChildren: './pages/tabs/tabs.module#TabsModule'
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/tabs/home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
