import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  fullname: string;
  id:string
}
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
fullname: string;
id: string;
constructor (public dialogRef : MatDialogRef<DialogBoxComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
  onConfirmClick(): void {
    this.dialogRef.close(true); // Indicate confirmation
  }

  onCloseClick(): void {
    this.dialogRef.close(false); // Indicate cancellation
  }



}
