import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../core/models/dialog.model'


@Component({
  selector: 'fit-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  //public liveForm?: FormGroup
  
  liveForm = new FormGroup({
    liveName: new FormControl(''),
    liveURL: new FormControl('')
  })  

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }  

}
