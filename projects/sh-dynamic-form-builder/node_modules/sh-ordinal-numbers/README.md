# Ordinal numbers pipe
#### You can add an ordinal suffix to number in Angular.
```
1st
2nd
3rd
4th
5th
6th
7th
8th
9th
10th
11th
...
```
## Setup

### Use npm to install the package
```
npm i sh-ordinal-numbers
```
###  Add dependencies to your module:
```typescript
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';

@NgModule({
      imports: [OrdinalNumbersModule],
})
export class AppModule { }
```
### Now you are able to use imported pipes, for example:
#### In template:
```html
<p>{{ 16 | ordinal}}</p> // Output: 16th
```
#### In component:
##### 1- Provide OrdinalPipe in module
```typescript
import { OrdinalNumbersModule, OrdinalPipe } from 'sh-ordinal-numbers';

@NgModule({
       imports: [OrdinalNumbersModule],
       providers: [OrdinalPipe]
})
export class AppModule { }
```
##### or
```typescript
import { OrdinalPipe } from 'sh-ordinal-numbers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OrdinalPipe]

})
```
##### 2-Use in component
```typescript
import { OrdinalPipe } from 'sh-ordinal-numbers';
ordinal: string = '';
constructor(private ordinalPipe: OrdinalPipe) {
      this.ordinal = this.ordinalPipe.transform(16); // Output: 16th
}
```
## License

MIT
