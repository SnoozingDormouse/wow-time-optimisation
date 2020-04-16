import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterStateModule } from './state/character-state.module';
import { EffectsModule } from '@ngrx/effects';
import { CharacterStateEffects } from './state/character-state.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterStateModule,
    EffectsModule.forFeature([ CharacterStateEffects ])
  ]
})
export class CharacterModule { }
