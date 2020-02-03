import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAPIState from './api-state.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature( fromAPIState.featureKey, fromAPIState.apiStateReducer )
  ]
})
export class ApiStateModule { }
