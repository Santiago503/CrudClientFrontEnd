import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import {MatNativeDateModule} from '@angular/material/core';
import { AddButtonComponent } from './add-button/add-button.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [HeaderComponent, AddButtonComponent],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent, AddButtonComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
