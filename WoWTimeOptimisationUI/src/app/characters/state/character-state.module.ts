import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCharacterState from './character-state.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature( fromCharacterState.featureKey, fromCharacterState.characterStateReducer )
  ]
})

export class CharacterStateModule { }
