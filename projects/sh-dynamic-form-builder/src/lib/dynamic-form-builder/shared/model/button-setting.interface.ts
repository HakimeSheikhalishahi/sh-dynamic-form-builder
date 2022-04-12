import { IButton } from "./button.interface";

export interface IButtonSetting {
    /**The array of buttons, order by definition */
    buttons: IButton[],
    /**Usable when fullWidthButtons is false*/
    buttonsAlign?: 'left' | 'center' | 'right';
    /**Full width in all sizes or mobile only */
    fullWidthButtons?: 'none' | 'all' | 'only-mobile';
}
