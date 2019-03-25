import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Tabs } from './tabs';
import { TabsRoutingModule } from './tabs-routing.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TabsRoutingModule,
    ],
    declarations: [Tabs]
})
export class TabsModule {}
