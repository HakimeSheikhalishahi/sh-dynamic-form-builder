import { IButtonSetting } from "./button-setting.interface";
import { IMainFieldItem } from "./main-field-item.interface";

export interface IConfig {
    /**Form title */
    title?: string;
    /** Set style for form title, you can add one or more class name split by space. for example:'class1 class1 class1' */
    titleClass?: string;
    /**Form fields */
    fields: IMainFieldItem[];
    /**Button setting*/
    buttonSetting: IButtonSetting;
}
