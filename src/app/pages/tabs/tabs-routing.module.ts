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
                ],
                data: {
                    title: 'Home'
                }
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: '../categories/categories.module#CategoriesModule'
                    }
                ],
                data: {
                    title: 'Categories'
                }
            },
            {
                path: 'schedule',
                children: [
                    {
                        path: '',
                        loadChildren: '../schedule/schedule.module#ScheduleModule'
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
                    }
                ]
            },
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
                ],
                data: {
                    title: 'speaker'
                }
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: '../map/map.module#MapModule'
                    }
                ],
                data: {
                    title: 'map'
                }
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutModule'
                    }
                ],
                data: {
                    title: 'about'
                }
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
export class TabsRoutingModule {}
