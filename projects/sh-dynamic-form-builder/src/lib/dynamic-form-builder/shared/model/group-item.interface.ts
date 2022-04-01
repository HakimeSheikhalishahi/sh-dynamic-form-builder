import { IButton } from "./button.interface";
import { IMainFieldItem } from "./main-field-item.interface";

export interface IGroupItem {
    title?: string;
    /** Set style for form title, you can add one or more class name split by space. for example:'class-a class-b class-c' */
    titleClass?: string;
    fields: IMainFieldItem[];
    /**The array of buttons, order by definition*/
    buttonSetting: {
        buttons: IButton[],
        /**Usable when fullWidthButtons is false*/
        buttonsAlign?: 'left' | 'center' | 'right';
        fullWidthButtons?: boolean;
    };
}
