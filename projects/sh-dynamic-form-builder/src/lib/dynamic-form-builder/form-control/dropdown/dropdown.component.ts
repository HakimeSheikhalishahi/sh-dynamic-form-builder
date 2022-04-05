import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFieldItem } from '../../shared/model/field-item.interface';
import { ErrorService } from '../../shared/service/error.service';
@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() field!: IFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor(private errorService: ErrorService) { }
  ngOnInit(): void {
    if (!this.field?.options?.length) {
      this.errorService.option(this.field?.name);
    }
  }
}
