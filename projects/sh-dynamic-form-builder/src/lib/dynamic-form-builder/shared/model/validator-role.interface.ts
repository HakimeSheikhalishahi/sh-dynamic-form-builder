export interface IValidatorRole {
    key:
    | 'min'
    | 'max'
    | 'pattern'
    | 'email'
    | 'required'
    | 'minlength'
    | 'maxlength';
    value?: any;
    msg: string;
}
