import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class PageModule { }
