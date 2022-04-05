import { IFieldItem } from './field-item.interface';
import { IFormArray } from "./form-array.interface";
export interface IMainFieldItem extends IFieldItem {
    type: 'text' | 'range' | 'number' | 'password' | 'color' | 'dropdown' | 'radio' | 'checkbox' | 'file' | 'date' | 'datetime-local' | 'time' | 'week' | 'month' | 'form-array';
    /** Usable for formArray type */
    formArray?: IFormArray
}
