import { IDivider } from "./divider.interface";
import { IFormArrayFieldItem } from "./form-array-field-item.interface";
export interface IFormArray {
    /** Set style for form array title, you can add one or more class name split by space. for example:'class1 class2 class3' */
    titleClass?: string;
    /**Define field for form array */
    fields: IFormArrayFieldItem[];
    /**Button without text, default is false */
    simpleAddButton?: boolean;
    /**Set add Button background color, Default is gray */
    addButtonBGColor?: 'gray' | 'green' | 'blue' | 'red' | 'orange' | 'light' | 'dark';
    /** Set style for divider line, you can add one or more class name split by space. for example:'class1 class2 class3' */
    divider?: IDivider;
}
