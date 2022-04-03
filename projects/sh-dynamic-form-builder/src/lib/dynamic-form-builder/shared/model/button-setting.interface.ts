import { IButton } from "./button.interface";

export interface IButtonSetting {
    /**The array of buttons, order by definition */
    buttons: IButton[],
    /**Usable when fullWidthButtons is false*/
    buttonsAlign?: 'left' | 'center' | 'right';
    fullWidthButtons?: boolean;
}
