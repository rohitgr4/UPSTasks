import { Component , TemplateRef} from '@angular/core';
import { UserdataComponent } from '../userdata/userdata.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-modalbtn',  
  templateUrl: './modalbtn.component.html',
  styleUrls: ['./modalbtn.component.css']
})
export class ModalbtnComponent {
  constructor(
    public dialogRef: MatDialogRef<UserdataComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  openDialog(dialogRef : UserdataComponent){
  this.dialogRef.open(dialogRef);
  }
}
