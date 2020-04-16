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
import { AngularMaterialModule } from 'src/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CharacterModule } from './characters/character.module';
import { EffectsModule } from '@ngrx/effects';
import * as fromBFAFlyingState from 'src/app/wto-flying-analyser/bfa-flying/state/bfa-flying.state.index';
import * as fromCharacterState from 'src/app/characters/state/character-state.index';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


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
        StoreModule.forFeature( fromBFAFlyingState.featureKey, fromBFAFlyingState.bfaFlyingStateReducer ),
        StoreModule.forFeature( fromCharacterState.featureKey, fromCharacterState.characterStateReducer ),
        EffectsModule.forRoot([]),

        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : [],

        AngularMaterialModule,

        // program modules
        WtoCommonComponentsModule,
        WtoFlyingAnalyserModule,
        CharacterModule,

        // Font-awesome
        FontAwesomeModule
      ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
