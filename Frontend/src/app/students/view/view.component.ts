import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  studentDetails!: Student;
  studentId:any
  constructor(private studentService: StudentsService,
    private router: ActivatedRoute) {

    this.studentId = this.router.snapshot.paramMap.get('id')

    this.studentService.getStudentById(this.studentId).subscribe({
      next: (res: any) => {
        this.studentDetails = res?.data
      },
      error: (err: any) => { }
    })
  }
}

