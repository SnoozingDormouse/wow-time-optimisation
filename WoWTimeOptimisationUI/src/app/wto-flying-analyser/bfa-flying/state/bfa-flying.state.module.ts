import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBFAFlyingState from './bfa-flying.state.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature( fromBFAFlyingState.featureKey, fromBFAFlyingState.bfaFlyingStateReducer )
  ]
})
export class BFAFlyingStateModule { }
