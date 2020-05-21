import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyComponent } from './lazy.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        LazyComponent,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
