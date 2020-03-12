import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    WtoFlyingAnalyserModule,
    WtoCommonComponentsModule
} from './index-modules';
import { environment } from 'src/environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CharacterModule } from './characters/character.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        StoreModule.forRoot({ }, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true
            }
        }),

        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : [],

        MatSidenavModule,

        // program modules
        CharacterModule,
        WtoCommonComponentsModule,
        WtoFlyingAnalyserModule,
      ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
