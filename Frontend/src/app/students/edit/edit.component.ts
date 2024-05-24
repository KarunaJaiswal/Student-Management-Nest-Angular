import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  studentDetails!: Student
  studentId: any
  editStudentForm!: FormGroup
  studentData!: Student;

  constructor(
    private studentService: StudentsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router,
    private snackbar: MatSnackBar
    ) {

    this.editStudentForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      fathername: ['', Validators.required],
      mothername: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      std: ['', Validators.required],
      // birth_date: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    })


  }

  durationSeconds = 3

  ngOnInit() {
    this.studentId = this.router.snapshot.paramMap.get('id') || ''

    if (this.studentId !== '') {

      this.studentService.getStudentById(this.studentId).subscribe({
        next: (res: any) => {
          this.studentData = res?.data
          console.log('this.studentData :', this.studentData);
          const patchData = this.editStudentForm.patchValue(this.studentData);
          console.log('patchData :', patchData);
        },
        error: (err: any) => { }
      })

    }

  }
  onSubmit() {
    console.log(this.editStudentForm.value)
    // if (this.editStudentForm.valid) {

    const updatedStudentFormData: Student = this.editStudentForm.value;
    this.studentService.updateStudent(this.studentId, updatedStudentFormData).subscribe({
      next: (res: any) => {
        this.snackbar.open( res.message, '', {
          panelClass:['snackbar-success'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: this.durationSeconds * 1000,
        })
        this.route.navigate(['students'])
      },
      error: (err: any) => { 
        this.snackbar.open( err.message, 'X', {
          panelClass:['snackbar-error', ],
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: this.durationSeconds * 1000,
        })
      }
    })
    // } else {
    //   console.log('inappropiate..!')
    // }
  }

}
