import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { TitleComponent } from './title/title.component';
import { ControlInputGenericComponent } from './control-input-generic/control-input-generic.component';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableMaterialComponent } from './table-material/table-material.component';
import { MaterialModule } from '../material/material.module';


const components = [HeaderComponent, AddButtonComponent,
  TitleComponent, ControlInputGenericComponent, ButtonSaveComponent, TableMaterialComponent];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [...components],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
