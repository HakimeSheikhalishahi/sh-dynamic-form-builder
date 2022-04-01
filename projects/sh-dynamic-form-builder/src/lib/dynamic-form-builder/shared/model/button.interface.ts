export interface IButton {
    type: 'submit' | 'cancel' | 'reset';
    caption: string;
    bgColor: 'gray' | 'green' | 'blue' | 'orange' | 'light' | 'dark';
}
