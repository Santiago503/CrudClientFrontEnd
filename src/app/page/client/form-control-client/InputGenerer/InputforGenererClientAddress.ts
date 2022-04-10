import { InputGeneric } from "src/app/component/control-input-generic/model/InputGeneric";

export const inputGenericDataClientAddress: InputGeneric[] = [
  { label: "",
    class: "w-100 ",
    appearance: null,
    type: "hidden",
    typeInput:"normal",
    formControlName:"clientId",
    data : null },

  { label: "Country",
    class: "col-md-4 col-sm-4",
    appearance: "outline",//Type style Mat or normal
    type: "text",//type input
    typeInput:"matInput",
    formControlName: "country",
    onlyUpperCase: false, //all word in UpperCase
    maxLength: 50,
    data : null,
    required: false },

  { label: "City",//
    class: "col-md-2 col-sm-4",
    appearance: "outline",
    type: "text",
    typeInput:"matInput",
    formControlName: "city",
    onlyUpperCase: false,
    maxLength: 50,
    data : null,
    required: false },

  { label: "Address",//
    class: "col-md-6 col-sm-4",
    appearance: "outline",
    type: "text",
    typeInput:"matInput",
    formControlName: "address",
    typeMethor: 'key',
    onlyUpperCase: false,
    maxLength: 160,
    data : null,
    required: false },
];
