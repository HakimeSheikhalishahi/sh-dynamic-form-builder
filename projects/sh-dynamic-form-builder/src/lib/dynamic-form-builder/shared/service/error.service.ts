import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor() { }
  private show(msg: string): void {
    console.error('SH Form Builder:', msg);
  }
  public option(fieldName: string): void {
    const msg = `${fieldName} doesn't have any option. please set Option property`;
    this.show(msg);
  }
  public formArrayField(fieldName: string): void {
    const msg = `${fieldName} doesn't have any field. please set value for FormArray Field`;
    this.show(msg);
  }
  public formGroupField(fieldName: string): void {
    const msg = `${fieldName} doesn't have any field. please set value for FormGroup Field`;
    this.show(msg);
  }
  public fileUpload(fieldName: string): void {
    const msg = `${fieldName} doesn't have onUpload method. please set it`;
    this.show(msg);
  }
}
