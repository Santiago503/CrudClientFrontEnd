import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import {MatNativeDateModule} from '@angular/material/core';
import { AddButtonComponent } from './add-button/add-button.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TitleComponent } from './title/title.component';
import { ControlInputGenericComponent } from './control-input-generic/control-input-generic.component';
import { ButtonSaveComponent } from './button-save/button-save.component';

const components = [HeaderComponent, AddButtonComponent,TitleComponent];
@NgModule({
  declarations: [...components, ControlInputGenericComponent, ButtonSaveComponent],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [...components],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
