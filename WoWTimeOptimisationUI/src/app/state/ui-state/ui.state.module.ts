import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUIState from './ui.state.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature( fromUIState.featureKey, fromUIState.uiStateReducer )
  ]
})
export class UIStateModule { }
