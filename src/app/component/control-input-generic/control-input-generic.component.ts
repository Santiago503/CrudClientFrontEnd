import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { maskCedula, maskPhoneRD } from 'src/app/helper/mask';
import { InputGeneric } from './model/InputGeneric';

@Component({
  selector: 'app-control-input-generic',
  templateUrl: './control-input-generic.component.html',
  styleUrls: ['./control-input-generic.component.css']
})
export class ControlInputGenericComponent implements OnInit {

  notPermit = [
    'textarea',
    'select',
    'ngselect',
    'ngselectMulti',
    'radio',
    'matSlideToggle'
  ]
  maskPhoneRD = maskPhoneRD;
  maskCedula  = maskCedula;
  @Input() inputGeneric : InputGeneric[];

  @Input() formGroup: FormGroup;


  @Input() classMain: string;
  @Input() subTitleformArrayName: string;

  @Output() change = new EventEmitter<any>();

  //formArray
  @Input() inputGenericDataArray : InputGeneric[];
  @Input() formArrayName: any;
  @Input() control: any;

  constructor() { }

  ngOnInit(): void {
  }

  getChange(input:InputGeneric , event: any) {
    let newEvent;
    if(input?.typeMethor?.includes('change')){

      if(input?.type?.includes('ngselect')) {
        newEvent = {
          value: event?.term,
          label: input?.label?.toLowerCase()
        }
      }else if (input?.type == 'file'){

        newEvent = {
          value: event?.target?.files,
          label: input?.label?.toLowerCase()
        }

      }else if (input?.type == 'select'){
        newEvent = {
          value: event?.value,
          label: input?.label?.toLowerCase()
        }
      }else{
        newEvent = {
          value: event?.target?.value,
          label: input?.label?.toLowerCase()
        }
      }
      this.change.emit(newEvent);
    }
  }

  get fields() {  return this.formGroup;  }

  getKeydown(input, event:Event) {
    //input must be typeMethor  Key
    if(
      (input?.label?.toLowerCase().includes('telefono')
      || input?.label?.toLowerCase().includes('cellphone')
      || input?.label?.toLowerCase().includes('celular'))
      && input?.typeMethor?.includes('key')){

      maskPhoneRD(event, input?.formControlName, this.fields);
    }else if(input?.label?.toLowerCase().includes('cedula') && input?.typeMethor?.includes('key')){
      maskCedula(event, input?.formControlName, this.fields)
    }
  }

}
