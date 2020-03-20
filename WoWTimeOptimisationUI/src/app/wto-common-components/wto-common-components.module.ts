import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiStateModule } from '../state/api-state/api-state.module';
import { RotatingIconComponent } from './rotating-icon/rotating-icon.component';
import { HeaderComponent } from './header/header.component';
import { SidenavTreeControlComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/angular-material.module'
import { UIStateModule } from '../state/ui-state/ui.state.module';


@NgModule({
  declarations: [
      RotatingIconComponent,
      HeaderComponent,
      SidenavTreeControlComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule,
    ApiStateModule,
    UIStateModule,
    AngularMaterialModule
  ],
  exports: [
    RotatingIconComponent,
    HeaderComponent,
    SidenavTreeControlComponent
  ]
})
export class WtoCommonComponentsModule { }
