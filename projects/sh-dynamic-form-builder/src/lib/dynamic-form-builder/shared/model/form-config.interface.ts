import { IButtonSetting } from "./button-setting.interface";
import { IFormControlConfig } from "./form-control-config.interface";
import { IMainFieldItem } from "./main-field-item.interface";
export interface IFormConfig {
    /**Form title */
    title?: string;
    /** Set style for form title, you can add one or more class name split by space. for example:'class1 class2 class3' */
    titleClass?: string;
    /**Form fields */
    fields: IMainFieldItem[];
    /**Button setting*/
    buttonSetting: IButtonSetting;
    /**Form controls configuration */
    formControlConfig?: IFormControlConfig;
}
