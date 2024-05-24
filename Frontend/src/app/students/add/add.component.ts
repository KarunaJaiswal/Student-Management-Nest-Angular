import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  newStudent: Student = {
    _id: '',
    fullname: '',
    fathername: '',
    mothername: '',
    gender: '',
    age: 10,
    std: 1,
    birth_date: new Date(),
    email: '',
    phone_number: 1345678900,
    address: '',
    city: '',
    state: "",
    zipcode: 123456,
  }

  durationSeconds = 3
  saveStudent() {
    console.log('form submitted')
    console.log(this.newStudent)
    delete this.newStudent._id

    this.studentService.createStudent(this.newStudent).subscribe(({
      next: (res: any) => {
          this.snackbar.open( res.message, 'X', {
            panelClass:['snackbar-success'],
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: this.durationSeconds * 1000,
          })
        this.router.navigate(['students/add'])
      },
      error: (err: any) => { 
        
      }
    }))

  }


}
