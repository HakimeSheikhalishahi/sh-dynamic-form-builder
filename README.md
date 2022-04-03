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

# Field properties

| Name | Type   | Required? | Description                                                                                                                |
| ---- | ------ | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| type | string | true      | text, range, number, password, color, dropdown, radio, checkbox, file, date, datetime-local, time, week, month, form-array |
| name | string | true      | Form control name                                                                                                          |

# Button properties

| Name    | Type   | Required? | Description                        |
| ------- | ------ | --------- | ---------------------------------- |
| type    | string | true      | submit, cancel , reset             |
| caption | string | true      | Button caption                     |
| bgColor | string | true      | gray ,green,blue,orange,light,dark |

# Validators

| Name         | Type    | Description                                                                                                          |
| ------------ | ------- | -------------------------------------------------------------------------------------------------------------------- |
| min          | number  | Validator that requires the control's value to be greater than or equal to the provided number.                      |
| max          | number  | Validator that requires the control's value to be less than or equal to the provided number.                         |
| email        | boolean | Validator that requires the control's value pass an email validation test.                                           |
| pattern      | string  | Validator that requires the control's value to match a regex pattern.                                                |
| required     | boolean | Validator that requires the control have a non-empty value.                                                          |
| requiredTrue | boolean | Validator that requires the control's value be true. This validator is commonly used for required checkboxes.        |
| minLength    | number  | Validator that requires the length of the control's value to be greater than or equal to the provided minimum length |
| maxLength    | number  | Validator that requires the length of the control's value to be less than or equal to the provided maximum length.   |

# License

MIT
