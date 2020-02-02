import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromApplicationState from './state/application-state.index';
import * as fromAPIState from './state/api-state/api-state.index';
import {
    WtoCommonComponentsModule
} from './index-modules';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ applicationState: fromApplicationState.reducer /*, APIState: fromAPIState.apiStateReducer */},
        {
            /* runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true
            } */
        }),

        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : [],

    // program modules
    WtoCommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
