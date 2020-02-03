import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingIconComponent } from './rotating-icon/rotating-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiStateModule } from '../state/api-state/api-state.module';

@NgModule({
  declarations: [
      RotatingIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ApiStateModule
  ],
  exports: [
    RotatingIconComponent
  ]
})
export class WtoCommonComponentsModule { }
