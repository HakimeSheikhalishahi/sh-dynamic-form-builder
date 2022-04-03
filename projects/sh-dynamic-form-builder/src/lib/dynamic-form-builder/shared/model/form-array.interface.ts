import { IFormArrayFieldItem } from "./form-array-field-item.interface";

export interface IFormArray {
    /**Define field for form array */
    fields: IFormArrayFieldItem[];
    /**Button without text, default is false */
    simpleAddButton?: boolean;
    /**Set add Button background color, Default is gray */
    addButtonBGColor?: 'gray' | 'green' | 'blue' | 'orange' | 'light' | 'dark';
    /** Set style for divider line, you can add one or more class name split by space. for example:'class1 class2 class3' */
    dividerLineClass?: string;
    /** Set style for ordinal number between divider line, you can add one or more class name split by space. for example:'class1 class2 class3' */
    ordinalNumberClass?: string;
    /**doesn't show an ordinal number in the center of the divider line */
    suppressOrdinalNumber?: boolean;
    /**doesn't show divider line */
    suppressDividerLine?: boolean;
}
