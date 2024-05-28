import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserdataComponent } from '../userdata/userdata.component';

@Component({
  selector: 'app-modalbtn',  
  templateUrl: './modalbtn.component.html',
  styleUrls: ['./modalbtn.component.css']
})
export class ModalbtnComponent {
  
constructor(public dialog: MatDialog) {}
 
openDialog(templateRef: TemplateRef<any>) {
  let dialogRef = this.dialog.open(templateRef, {
    width: '300px',
    height:'300px' // Adjust width as needed
  });
}



}