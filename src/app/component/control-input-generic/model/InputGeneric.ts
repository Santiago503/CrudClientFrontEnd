export interface InputGeneric {
  label: string,
  class: string,
  appearance: "outline" | "standard" | "legacy" | "fill" | null,
  type: string,
  typeInput: "matInput" | "normal", //type of Input Normal o Angular Material
  formControlName: string,
  data: any, //the date case be Select or Radio
  required?: boolean, //If Required
  typeMethor?: "key" | "change" | "key-change", //Type Event Key, change or both
  typeData?: "Complete" | "id", //Tipo de cada a retornar cuando se haga un change si Id o el Obj completo
  maxLength?: number,
  readonly? : boolean, //Can writter or cannot
  onlyUpperCase? : boolean, //all in UpperCase
  color?: string,
  rows?:number //Of textarea
}
