export interface IValidationRules {
    rule:
    | 'min'
    | 'max'
    | 'pattern'
    | 'email'
    | 'required'
    | 'minlength'
    | 'maxlength';
    /**Usable for min, max,pattern,minlength and maxlength rules */
    value?: any;
    /**Error message */
    msg: string;
}
