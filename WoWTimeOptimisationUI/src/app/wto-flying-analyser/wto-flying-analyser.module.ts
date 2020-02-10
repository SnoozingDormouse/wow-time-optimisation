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
    MatExpansionModule
  ],
  exports: [
      FlyingSummaryComponent
  ]
})
export class WtoFlyingAnalyserModule { }
