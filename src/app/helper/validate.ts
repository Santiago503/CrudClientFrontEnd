import { AbstractControl } from "@angular/forms";

export function NameValidator(control: AbstractControl) {
  let isInvalid = false;
  if (control.value) {
    const words = String(control.value).split(" ");
    words.forEach((element) => {
      if (!element.match(/^[a-z A-ZÀ-ÿ\u00f1\u00d1\s]+$/)) {
        isInvalid = true;
      }
    });

    if (isInvalid) {
      return { validName: true };
    } else {
      return null;
    }
  } else {
    return null;
  }
}


export function EmailValidator(control: AbstractControl) {
  let isInvalid = false;
  if (control.value) {
    const words = String(control.value).split(" ");
    words.forEach((element) => {
      if (!element.match(/(^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,4}$)/)) {
        isInvalid = true;
      }
    });

    if (isInvalid) {
      return { email: true };
    } else {
      return null;
    }
  } else {
    return null;
  }
}

