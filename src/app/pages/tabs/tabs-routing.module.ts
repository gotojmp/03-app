import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabs } from './tabs';


const routes: Routes = [
    {
        path: '',
        component: Tabs,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomeModule'
                    }
                ]
            },
            // {
            //     path: 'schedule',
            //     children: [
            //         {
            //             path: '',
            //             component: SchedulePage,
            //         },
            //         {
            //             path: 'session/:sessionId',
            //             loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
            //         }
            //     ]
            // },
            {
                path: 'speakers',
                children: [
                    {
                        path: '',
                        loadChildren: '../speaker-list/speaker-list.module#SpeakerListModule'
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
                    },
                    {
                        path: 'speaker-details/:speakerId',
                        loadChildren: '../speaker-detail/speaker-detail.module#SpeakerDetailModule'
                    }
                ]
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: '../map/map.module#MapModule'
                    }
                ]
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutModule'
                    }
                ]
            },
            {
                path: '**',
                redirectTo: '/tabs/home'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
