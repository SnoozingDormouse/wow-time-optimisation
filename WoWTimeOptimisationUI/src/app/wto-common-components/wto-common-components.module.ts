import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiStateModule } from '../state/api-state/api-state.module';
import { RotatingIconComponent } from './rotating-icon/rotating-icon.component';
import { HeaderComponent } from './header/header.component';
import { SidenavTreeControlComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
      RotatingIconComponent,
      HeaderComponent,
      SidenavTreeControlComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule,
    ApiStateModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    RotatingIconComponent,
    HeaderComponent,
    SidenavTreeControlComponent
  ]
})
export class WtoCommonComponentsModule { }
