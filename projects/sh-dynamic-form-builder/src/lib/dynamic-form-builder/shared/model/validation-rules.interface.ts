export interface IValidationRules {
    rule:
    | 'min'
    | 'max'
    | 'pattern'
    | 'email'
    | 'required'
    | 'minlength'
    | 'maxlength'
    | 'requiredTrue'
    /**Usable for min, max,pattern,minlength and maxlength rules */
    value?: any;
    /**Error message */
    msg: string;
}
