export interface IButton {
    type: 'submit' | 'cancel' | 'reset';
    caption: string;
    bgColor: 'gray' | 'green' | 'blue' | 'red' | 'orange' | 'light' | 'dark';
}
