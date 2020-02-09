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
    CommonModule
  ],
  exports: [
      FlyingSummaryComponent
  ]
})
export class WtoFlyingAnalyserModule { }
