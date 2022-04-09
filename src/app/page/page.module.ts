import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';
import { ClientComponent } from './client/client.component';
import { FormControlClientComponent } from './client/form-control-client/form-control-client.component';


@NgModule({
  declarations: [HomeComponent, ClientComponent, FormControlClientComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class PageModule { }
