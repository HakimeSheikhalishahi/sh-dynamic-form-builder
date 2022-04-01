<h2 align="center">Dynamic Form Builder for Angular</h2>

<p align="center">
 generate form controls and form array.
 </p>
 
 ## Table of contents
 
- [Install](#install)
- [Quick start](#quick-start)
- [Field properties](#field-properties)
- [Import style and icon](#import-style-and-icon)

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
npm install sh-ordinal-numbers --save
```
# Quick start

```typescript
import { DynamicFormBuilderModule } from 'sh-dynamic-form-builder';

@NgModule({
      imports: [DynamicFormBuilderModule],
})
export class AppModule { }
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
    "./node_modules/bootstrap/scss/bootstrap.scss"
]
```

# Field properties
