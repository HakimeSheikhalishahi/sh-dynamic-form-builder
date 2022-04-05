import { IFieldItem } from "./field-item.interface";
export interface IFormArrayFieldItem extends IFieldItem {
    type: 'text' | 'range' | 'number' | 'password' | 'color' | 'dropdown' | 'radio' | 'checkbox' | 'file' | 'date' | 'datetime-local' | 'time' | 'week' | 'month';
}
