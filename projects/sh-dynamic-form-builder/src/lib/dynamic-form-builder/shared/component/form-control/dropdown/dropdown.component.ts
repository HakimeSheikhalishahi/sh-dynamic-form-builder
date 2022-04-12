import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../../../model/main-field-item.interface';
import { ErrorService } from '../../../service/error.service';
import { FormService } from '../../../service/form.service';
@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  get size(): string {
    return this.formService.elementSize();
  }
  constructor(private errorService: ErrorService,
    private formService: FormService) { }
  ngOnInit(): void {
    if (!this.field?.options?.length) {
      this.errorService.option(this.field?.name);
    }
  }
}
