import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  studentId: any

  durationSeconds = 3
  constructor(private studentService: StudentsService, private router: ActivatedRoute, private route: Router, private snackbar: MatSnackBar) {

    this.studentId = this.router.snapshot.paramMap.get('id')
    this.studentService.deleteStudent(this.studentId).subscribe({
      next: (res: any) => {
      
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
  }
}
