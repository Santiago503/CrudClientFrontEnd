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
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

const components = [HeaderComponent, AddButtonComponent,TitleComponent, ControlInputGenericComponent, ButtonSaveComponent];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [...components],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
