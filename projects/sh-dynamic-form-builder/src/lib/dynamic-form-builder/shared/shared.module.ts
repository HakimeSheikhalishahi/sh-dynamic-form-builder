import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './component/component.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [ComponentModule]
})
export class SharedModule { }
