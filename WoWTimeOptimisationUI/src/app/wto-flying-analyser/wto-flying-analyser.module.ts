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
    BFAFlyingStateModule
  ],
  providers: [
    BFAFlyingViewModel
  ],
  exports: [
      FlyingSummaryComponent
  ]
})
export class WtoFlyingAnalyserModule { }
