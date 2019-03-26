import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { filter, map, mergeMap } from 'rxjs/operators';

import { UserData } from './providers/user-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    appPages = [
        {
            title: 'Home',
            url: '/tabs/home',
            icon: 'home'
        },
        {
            title: 'Schedule',
            url: '/tabs/schedule',
            icon: 'calendar'
        },
        {
            title: 'Speakers',
            url: '/tabs/speakers',
            icon: 'contacts'
        },
        {
            title: 'Map',
            url: '/tabs/map',
            icon: 'map'
        },
        {
            title: 'About',
            url: '/tabs/about',
            icon: 'information-circle'
        }
    ];
    loggedIn = false;

    constructor(
        private events: Events,
        private menu: MenuController,
        private platform: Platform,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        private title: Title,
        private userData: UserData
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        this.checkLoginStatus();
        this.listenForLoginEvents();
        this.updateTitle();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    checkLoginStatus() {
        return this.userData.isLoggedIn().then(loggedIn => {
            return this.updateLoggedInStatus(loggedIn);
        });
    }

    updateLoggedInStatus(loggedIn: boolean) {
        setTimeout(() => {
            this.loggedIn = loggedIn;
        }, 300);
    }

    listenForLoginEvents() {
        this.events.subscribe('user:login', () => {
            this.updateLoggedInStatus(true);
        });

        this.events.subscribe('user:signup', () => {
            this.updateLoggedInStatus(true);
        });

        this.events.subscribe('user:logout', () => {
            this.updateLoggedInStatus(false);
        });
    }

    updateTitle() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            filter(route => route.outlet === 'primary'),
            mergeMap(route => route.data)
        ).subscribe(event => this.title.setTitle(event.title));
    }

    logout() {
        this.userData.logout().then(() => {
            return this.router.navigateByUrl('/');
        });
    }

    openTutorial() {
        this.menu.enable(false);
        this.storage.set('ion_did_tutorial', false);
        this.router.navigateByUrl('/tutorial');
    }
}
