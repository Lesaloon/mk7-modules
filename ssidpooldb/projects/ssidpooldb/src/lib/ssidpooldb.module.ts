import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ssidpooldbComponent } from './components/ssidpooldb.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: ssidpooldbComponent }
];

@NgModule({
    declarations: [ssidpooldbComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [ssidpooldbComponent]
})
export class ssidpooldbModule { }
