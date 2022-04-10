import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFieldItem } from '../../shared/model/field-item.interface';
import { ErrorService } from '../../shared/service/error.service';
import { FormService } from '../../shared/service/form.service';
@Component({
  selector: 'lib-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() field!: IFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  get size(): string {
    return this.formService.elementSize();
  }
  constructor(private errorService: ErrorService, private formService: FormService) { }
  ngOnInit(): void {
    if (!this.field.onUpload) {
      this.errorService.fileUpload(this.field.name);
    }
  }
}
