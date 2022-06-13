import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listening-for-changes',
  templateUrl: './listening-for-changes.component.html',
  styleUrls: ['./listening-for-changes.component.css'],
})
export class ListeningForChangesComponent implements OnInit {
  editEnable = false;
  text: string;
  originalValue: string;

  permanentRangeCategoryForm: FormGroup;
  formattedMessage: string;
  examplearay;

  objects = {
    rangeCategory: '322',
    rangeSubType: 'ggg34',
    rangeType: 'gfrre3',
  };

  ngOnInit() {
    this.permanentRangeCategoryForm = this.fb.group({
      rangeCategory: [''],
      rangeType: [''],
      rangeSubType: [''],
    });

    this.onChanges(this.objects.rangeCategory);
  }

  constructor(private fb: FormBuilder) {}

  savePermanentRangeCategory() {
    if (this.editEnable) {
      window.alert('Update');
      this.editEnable = false;
    } else {
      window.alert('Save');
    }
  }

  editButton() {
    this.permanentRangeCategoryForm.patchValue(this.objects);
    this.editEnable = true;
    //this.onChanges(this.objects.rangeCategory);
  }

  onChanges(val): void {
    const x = val;
    this.originalValue = val;
    this.permanentRangeCategoryForm
      .get('rangeCategory')
      .valueChanges.subscribe((val) => {
        this.text = `My name is ${val}.`;
        // if ((val = !x)) {
        //   //window.alert('Values isnt matching');
        //   this.text = `Values isnt matching ${val}.`;
        // } else {
        //   this.text = `Values is matching ${val}.`;
        // }
        if (val !== x) {
          this.editEnable = false;
        } else {
          this.editEnable = true;
        }
      });
  }

  resetPermamentRangeCategory() {
    this.permanentRangeCategoryForm.reset();
  }
}
