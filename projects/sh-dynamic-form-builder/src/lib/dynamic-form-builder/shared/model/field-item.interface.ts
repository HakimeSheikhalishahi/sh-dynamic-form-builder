import { IOption } from "./option.interface";
import { IValidationRules } from "./validation-rules.interface";
export interface IFieldItem {
    name: string;
    label: string;
    /**Setting default value */
    defaultValue?: any;
    /**Usable for text, number, password, dropdown and email*/
    placeholder?: string;
    /**Setting validator and error message */
    validators?: IValidationRules[];
    /**Usable for file */
    onUpload?: (e: any) => void;
    /**Usable for file */
    multipleFile?: boolean;
    /**Element id */
    id?: string;
    /**Usable for textarea */
    multiline?: boolean;
    /**Usable for textarea, default is 5 lines */
    rowCount?: number;
    /**Default with is 100% */
    width?: number;
    /**Usable for range input, default is 0 */
    rangeMin?: number;
    /**Usable for range input, default is 100 */
    rangeMax?: number;
    /**Usable for range input, default is 1 */
    rangeStep?: number;
    /**Usable for radio button, default is false */
    inline?: boolean;
    /**Usable for radio button and dropdown list*/
    options?: IOption[];
    disable?: boolean;
}
