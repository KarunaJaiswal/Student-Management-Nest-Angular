import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Student } from '../models/student'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentsService } from '../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  fullname: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  fullname: string;
  id: string;
  // api call
  students: Student[] = [];
  dataSource: any;
  constructor(
    private studentService: StudentsService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private route: Router) {

    //get students api call

    this.studentService.getStudents().subscribe({
      next: (res: any) => {
        const students = res?.data
        this.students = students;

        this.dataSource = new MatTableDataSource<Student>(this.students)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error: (err: any) => { }
    })

  }

  displayColumns: string[] = ["fullname", "fathername", "mothername", "gender", "age", "std", "email", "phone_number", "address", "actions"]
  selection = new SelectionModel(true, [])


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort


  openDeleteDialog(fullname: string, id: string) {

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      panelClass: ['delete-dialog'],
      data: { fullname: fullname, id: id }
    })


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteStudent(id)
      }
      console.log('The dialog was closed');
    });


  }
  durationSeconds = 3
  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe({
      next: (res: any) => {
        this.snackbar.open(res.message, 'X', {
          panelClass: ['snackbar-success'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
          // duration: this.durationSeconds * 1000,
        })
        this.route.navigate(['students'])
      },
      error: (err: any) => {
        this.snackbar.open(err.message, 'X', {
          panelClass: ['snackbar-error',],
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: this.durationSeconds * 1000,
        })
      }
    })
  }


}
