import { AbstractControl } from "@angular/forms";
const excludedKeys = [8, 37, 39, 46, 9];
// mask cedula format
export function maskCedula(event: any, field: string = '', fields: any = null) {
  const keyCode = event.keyCode;
  if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || excludedKeys.includes(keyCode) ) ||
    event.shiftKey ) {  event.preventDefault(); }

  if(fields == null) {
    //get the fields cedula
      if (this.cedula.value?.length === 3) {
        if (!excludedKeys.includes(keyCode)) {
          this.cedula.setValue(this.cedula.value + "-");
        }
      }

      if (this.cedula.value?.length === 11) {
        if (!this.cedula.value.includes("-", 4)) {
          if (!excludedKeys.includes(keyCode))
            this.cedula.setValue(this.cedula.value + "-");
        }
      }
  }else {
    //get the fields by paramet
    // Set 809-
    setQuidon(fields, field, 3, keyCode, excludedKeys);
    // 809-000-
    setQuidonFromIndex(fields, field, 11, keyCode, excludedKeys, 4);

  }
}

// mask  format
export function maskPhoneRD(event: any, field: string, fields: any = null) {
  const keyCode = event.keyCode;

  if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ||  excludedKeys.includes(keyCode)) || event.shiftKey)
  { event.preventDefault();  }

  if(fields == null) {
      // Set 809-
      setQuidon(this.fields, field, 3, keyCode, excludedKeys);
      // 809-000-
      setQuidonFromIndex(this.fields, field, 7, keyCode, excludedKeys, 4);
    }else{
      // Set 809-
    setQuidon(fields, field, 3, keyCode, excludedKeys);
    // 809-000-
    setQuidonFromIndex(fields, field, 7, keyCode, excludedKeys, 4);
  }
}

function setQuidon(fields: any, field: string, lengthSetQuidon:number, keyCode: number, excludedKeys: number[]) {
  fields = fields.get(field);
  if (fields?.value?.length === lengthSetQuidon && field != '') {
    if (!excludedKeys.includes(keyCode)) {
      fields?.setValue(fields?.value + "-");
    }
  }
}

function setQuidonFromIndex(fields: any, field: string, lengthSetQuidon:number, keyCode: number, excludedKeys: number[], FromIndex = 0) {
  fields = fields.get(field);

  if (fields?.value?.length === lengthSetQuidon && field != '') {
    if (!fields?.value.includes("-", FromIndex) && !excludedKeys.includes(keyCode)) {
        fields?.setValue(fields?.value + "-");
    }
  }
}
