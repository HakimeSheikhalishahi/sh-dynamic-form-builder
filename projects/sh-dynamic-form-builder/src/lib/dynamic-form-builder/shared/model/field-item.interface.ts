import { IOption } from "./option.interface";
import { IValidationRules } from "./validation-rules.interface";
export interface IFieldItem {
    name: string;
    label: string;
    /**Usable for all controls */
    defaultValue?: any;
    /**Usable for text, number, password, dropdown and email*/
    placeholder?: string;
    /**Usable for all controls */
    validators?: IValidationRules[];
    /**Usable for file */
    onUpload?: (e: any) => void;
    /**Usable for file */
    multipleFile?: boolean;
    /**Element id, usable for all controls */
    id?: string;
    /**Usable for textarea */
    list?: string;
    multiline?: boolean;
    /**Usable for textarea, default is 5 lines */
    rowCount?: number;
    /**Usable for all controls, default with is 100% */
    width?: number;
    /**Usable for range input, default is 0 */
    rangeMin?: number;
    /**Usable for range input, default is 100 */
    rangeMax?: number;
    /**Usable for range input, default is 1 */
    rangeStep?: number;
    /**Usable for radio button, default is false */
    inline?: boolean;
    /**Usable for radio button */
    options?: IOption[];
    disable?: boolean;
}
