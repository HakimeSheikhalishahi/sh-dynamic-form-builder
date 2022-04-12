import { IFormGroupFieldItem } from "./form-group-field-item.interface";

export interface IFormGroup {
    /** Set style for form group title, you can add one or more class name split by space. for example:'class1 class2 class3' */
    titleClass?: string;
    /**Show in bootstrap card */
    showInCard?: boolean;
    fields: IFormGroupFieldItem[];

}
