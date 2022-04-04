<h2 align="center">Dynamic Form Builder for Angular</h2>

<p align="center">
 generate form controls and form array.
 </p>
 
 ## Table of contents
 
- [Install](#install)
- [Quick start](#quick-start)
- [Field properties](#field-properties)
- [Import style and icon](#import-style-and-icon)
- [License](#license)

# Install

```bash
npm install @sh-dynamic-form-builder
```

## Install dependencies

<p>Use bootstrap V5</p>

```bash
npm install bootstrap --save
```

```bash
npm install bootstrap-icons --save
```

```bash
npm install sh-ordinal-numbers --save
```

# Quick start

```typescript
import { DynamicFormBuilderModule } from "sh-dynamic-form-builder";

@NgModule({
  imports: [DynamicFormBuilderModule],
})
export class AppModule {}
```

# Import style and icon

## In styles.scss

```css
@import "~bootstrap-icons/font/bootstrap-icons";
```

## In angular.json

```json
"styles": [
    "src/styles.scss",
    "./node_modules/bootstrap/scss/bootstrap.scss",
    "./node_modules/bootstrap-icons/font/bootstrap-icons.scss"
]
```

## In component

```typescript

config: IFormConfig = {
    title: 'Profile',
    fields: [
      {
        type: 'text', name: 'fullName', label: 'Full name',
        validators: [
          { rule: 'required', msg: 'Full name is required' },
          { rule: 'minlength', value: 6, msg: 'Full name must be at least 6 characters long' },

        ],
      },
      {
        type: 'text', name: 'email', label: 'E-mail',
        validators: [
          { rule: 'required', msg: 'E-mail is required' },
          { rule: 'email', msg: 'E-mail is wrong' },
        ],
      }
      ...
}
```

## In template

```html
<div class="container">
  <sh-dynamic-form-builder
    [config]="config"
    [isSubmit]="isSubmit"
    (submit)="submit($event)"
  >
  </sh-dynamic-form-builder>
</div>
```

# Upload file

```typescript
config: IFormConfig = {
    fields: [
      {
        type: 'file',name: 'avatar', label: 'Avatar',
         onUpload: this.onUpload.bind(this), multipleFile: true
      }
      ...
```

```typescript
private onUpload(event: any): void {
    const files = event.files;
    ...
}
```

# Input

| Name              | Type          | Default | Required? | Description                                                                                                                                                                                        |
| ----------------- | ------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [config](#config) | `IFormConfig` | `-`     | yes       | Form config                                                                                                                                                                                        |
| formValue         | `object`      | `{}`    | -         | Adjust form values                                                                                                                                                                                 |
| isSubmit          | `boolean`     | `false` | no        | Set in to your Submit Function. If it sets "true", Submit button will be disabled.When submit is clicked it must be set "true" value, when sending data will be ended it must be set "false" value |

# Config

| Name                             | Type             | Default | Required? | Description                                                                                                     |
| -------------------------------- | ---------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| [fields](#fields)                | `IMainFieldItem` | `-`     | yes       | Form fields                                                                                                     |
| title                            | `string`         | `-`     | no        | Form title                                                                                                      |
| titleClass                       | `string`         | `-`     | no        | Set style for form title, you can add one or more class name split by space. for example:'class1 class1 class1' |
| [buttonSetting](#button-setting) | `IButtonSetting` | `{}`    | yes       | Button setting                                                                                                  |

# Output

| Name     | Type        | Description                                  |
| -------- | ----------- | -------------------------------------------- |
| (submit) | `FormGroup` | Output formGroup, when Submit button clicked |
| (cancel) | `boolean`   | When the Cancel button has been clicked      |

# Field properties and methods

| Name                        | Type               | Default | Required? | Description                                                                                                                                   |
| --------------------------- | ------------------ | ------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| type                        | `string`           | `-`     | yes       | Allowed values: text, range, number, password, color, dropdown, radio, checkbox, file, date, datetime-local, time, week, month and form-array |
| name                        | `string`           | `-`     | yes       | Form control name                                                                                                                             |
| defaultValue                | `any`              | `-`     | no        | Form control default value                                                                                                                    |
| placeholder                 | `string`           | `-`     | no        | Usable for text, number, password, dropdown and email                                                                                         |
| [[validators]](#Validators) | `IValidationRules` | `-`     | no        | Set validator rules and error messages                                                                                                        |
| id                          | `string`           | `-`     | no        | Element id                                                                                                                                    |
| width                       | `number`           | `100%`  | no        | Width of Control                                                                                                                              |
| disable                     | `boolean`          | `false` | no        | Disable control                                                                                                                               |

- ## File

  | Name                     | Type      | Default | Required? | Description                |
  | ------------------------ | --------- | ------- | --------- | -------------------------- |
  | [onUpload](#upload-file) | `void`    | `-`     | yes       | File selection event.      |
  | multipleFile             | `boolean` | `false` | no        | Allow choice multiple file |

- ## Text

  | Name      | Type      | Default | Required? | Description                                           |
  | --------- | --------- | ------- | --------- | ----------------------------------------------------- |
  | multiline | `boolean` | `false` | no        | Multiline handling                                    |
  | rowCount  | `number`  | `5`     | no        | Specifies the visible height of a text area, in lines |

- ## Radio

  | Name      | Type      | Default | Required? | Description                                  |
  | --------- | --------- | ------- | --------- | -------------------------------------------- |
  | [options] | `IOption` | `-`     | yes       | Define options: {key: string;label: string;} |
  | inline    | `boolean` | `false` | no        | Show on the same horizontal row              |

- ## dropdown

  | Name      | Type      | Default | Required? | Description                                  |
  | --------- | --------- | ------- | --------- | -------------------------------------------- |
  | [options] | `IOption` | `-`     | yes       | Define options: {key: string;label: string;} |

- ## Range
  | Name     | Type     | Default | Required? | Description      |
  | -------- | -------- | ------- | --------- | ---------------- |
  | rangeMin | `number` | `0`     | no        | value of the min |
- ## Range
  | Name      | Type     | Default | Required? | Description       |
  | --------- | -------- | ------- | --------- | ----------------- |
  | rangeMin  | `number` | `0`     | no        | value of the min  |
  | rangeMax  | `number` | `100`   | no        | value of the max  |
  | rangeStep | `number` | `1`     | no        | value of the step |
- ## Form-array
  | Name                    | Type         | Default | Required? | Description                           |
  | ----------------------- | ------------ | ------- | --------- | ------------------------------------- |
  | [formArray](#FormArray) | `IFormArray` | `{}`    | no        | Set form array fields and validations |
  - ### FormArray
    | Name                  | Type                  | Default | Required? | Description                                                                                                                              |
    | --------------------- | --------------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
    | [fields]              | `IFormArrayFieldItem` | `-`     | yes       | Form array fiels                                                                                                                         |
    | simpleAddButton       | `boolean`             | `false` | no        | Only icon on button, without text                                                                                                        |
    | addButtonBGColor      | `string`              | `gray`  | no        | Allowed values: gray, green, blue, orange, light and dark                                                                                |
    | dividerLineClass      | `string`              | `-`     | no        | Set style for divider line, you can add one or more class name split by space. for example:'class1 class2 class3'                        |
    | ordinalNumberClass    | `string`              | `-`     | no        | Set style for ordinal number between divider line, you can add one or more class name split by space. for example:'class1 class2 class3' |
    | suppressOrdinalNumber | `boolean`             | `false` | no        | Doesn't show an ordinal number in the center of the divider line                                                                         |
    | suppressDividerLine   | `boolean`             | `false` | no        | Doesn't show divider line                                                                                                                |

# Button setting

| Name                            | Type      | Default | Required? | Description                                     |
| ------------------------------- | --------- | ------- | --------- | ----------------------------------------------- |
| [[buttons]](#button-properties) | `IButton` | `[]`    | yes       | The array of buttons, order by definition       |
| buttonsAlign                    | `string`  | `left`  | no        | Usable when fullWidthButtons is false           |
| fullWidthButtons                | `boolean` | `false` | no        | Buttons fill the entire width of the container. |

- # Button properties

| Name    | Type     | Required? | Description                                            |
| ------- | -------- | --------- | ------------------------------------------------------ |
| type    | `string` | yes       | Allowed values: submit, cancel and reset               |
| caption | `string` | yes       | Button caption                                         |
| bgColor | `string` | yes       | Allowed values: gray ,green,blue,orange,light and dark |

# Validators

| name                     | type     | Required | Description                                               |
| ------------------------ | -------- | -------- | --------------------------------------------------------- |
| [rule](#validator-rules) | `string` | yes      | Define rules                                              |
| msg                      | `string` | yes      | Error message                                             |
| value                    | `any`    | no       | Usable for min, max,pattern,minlength and maxlength rules |

- ## Validator rules

| Name         | Type      | Description                                                                                                          |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------------- |
| min          | `number`  | Validator that requires the control's value to be greater than or equal to the provided number.                      |
| max          | `number`  | Validator that requires the control's value to be less than or equal to the provided number.                         |
| email        | `boolean` | Validator that requires the control's value pass an email validation test.                                           |
| pattern      | `string`  | Validator that requires the control's value to match a regex pattern.                                                |
| required     | `boolean` | Validator that requires the control have a non-empty value.                                                          |
| requiredTrue | `boolean` | Validator that requires the control's value be true. This validator is commonly used for required checkboxes.        |
| minLength    | `number`  | Validator that requires the length of the control's value to be greater than or equal to the provided minimum length |
| maxLength    | `number`  | Validator that requires the length of the control's value to be less than or equal to the provided maximum length.   |

# Creator

**Hakime sheikhalishahi**

- http://www.linkedin.com/in/hakime-sheikhalishahi
- h.sheykhalishahi@gmail.com

# License

MIT

```

```
