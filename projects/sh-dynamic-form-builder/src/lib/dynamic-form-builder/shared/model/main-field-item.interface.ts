import { IValidationRules  } from "./validation-rules.interface";
import { IFieldItem } from './field-item.interface';
import { IFormArrayFieldItem } from "./form-array-field-item.interface";

export interface IMainFieldItem extends IFieldItem {
    type: 'text' | 'range' | 'number' | 'password' | 'color' | 'dropdown' | 'radio' | 'checkbox' | 'file' | 'date' | 'datetime-local' | 'time' | 'week' | 'month' | 'form-array';
    /** Usable for formArray type */
    formArray?: {
        /**Define field for form array */
        field: IFormArrayFieldItem[];
        /**Button without text, default is false */
        simpleAddButton?: boolean;
        /**Set add Button background color, Default is gray */
        addButtonBGColor?: 'gray' | 'green' | 'blue' | 'orange' | 'light' | 'dark';
        /** Set style for divider line, you can add one or more class name split by space. for example:'class-a class-b class-c' */
        dividerLineClass?: string;
        /** Set style for ordinal number between divider line, you can add one or more class name split by space. for example:'class-a class-b class-c' */
        ordinalNumberClass?: string;
        /**doesn't show an ordinal number in the center of the divider line */
        suppressOrdinalNumber?: boolean;
        /**doesn't show divider line */
        suppressDividerLine?: boolean;
    }
}
