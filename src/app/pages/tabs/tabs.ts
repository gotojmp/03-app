import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
    constructor(private router: Router) {}

    ionViewWillEnter() {
        // this.router.navigateByUrl('/tabs/home');
    }
}
