import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FlyingSummaryComponent,
    ShadowlandsFlyingComponent,
    BfaFlyingComponent,
    LegionFlyingComponent,
    WodFlyingComponent,
    MopFlyingComponent,
    CataFlyingComponent,
    WotlkFlyingComponent,
    TbcFlyingComponent,
    AzerothFlyingComponent } from './wto-flying-analyser.index';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { BFAFlyingStateModule } from './bfa-flying/state/bfa-flying.state.module';
import { BFAFlyingViewModel } from './bfa-flying/bfa-flying.viewmodel';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BFAFlyingStateEffects } from './bfa-flying/state/bfa-flying.state.effects';

@NgModule({
  declarations: [
      FlyingSummaryComponent,
      ShadowlandsFlyingComponent,
      BfaFlyingComponent,
      LegionFlyingComponent,
      WodFlyingComponent,
      MopFlyingComponent,
      CataFlyingComponent,
      WotlkFlyingComponent,
      TbcFlyingComponent,
      AzerothFlyingComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    BFAFlyingStateModule,
    EffectsModule.forFeature([ BFAFlyingStateEffects ])
  ],
  providers: [
    BFAFlyingViewModel
  ],
  exports: [
      FlyingSummaryComponent
  ]
})
export class WtoFlyingAnalyserModule { }
