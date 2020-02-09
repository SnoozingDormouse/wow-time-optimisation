import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    AzerothFlyingComponent } from 'src/app/wto-flying-analyser/wto-flying-analyser.index';
import { WtoHomeComponent } from './wto-home/wto-home.component';

const routes: Routes = [
    { path: 'home', component: WtoHomeComponent},
    { path: 'summary-flying', component: FlyingSummaryComponent},
    { path: 'shadowlands-flying', component: ShadowlandsFlyingComponent},
    { path: 'bfa-flying', component: BfaFlyingComponent},
    { path: 'legion-flying', component: LegionFlyingComponent},
    { path: 'wod-flying', component: WodFlyingComponent},
    { path: 'mop-flying', component: MopFlyingComponent},
    { path: 'cata-flying', component: CataFlyingComponent},
    { path: 'wotlk-flying', component: WotlkFlyingComponent},
    { path: 'tbc-flying', component: TbcFlyingComponent},
    { path: 'azeroth-flying', component: AzerothFlyingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
