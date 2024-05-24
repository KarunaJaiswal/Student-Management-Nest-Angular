import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrl = "http://localhost:3000/student"
  constructor(private httpClient: HttpClient) { }

  //STUDENT CRUD FUNCTIONALITY

  //create student
  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.apiUrl, student);
  }

  //get students
  getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.apiUrl)
  }

  //get student by id
  getStudentById(id:string): Observable<Student>{
  console.log('id :', id);
    const url = `${this.apiUrl}/${id}`
    console.log('url :', url);
    return this.httpClient.get<Student>(url)
  }

  //update Student by id
  updateStudent(id:string, student: Student):Observable<Student>{
    const url = `${this.apiUrl}/${id}`
    return  this.httpClient.put<Student>(url, student)
  }

  //delete Student
  deleteStudent(id:string):Observable<void>{
    const url = `${this.apiUrl}/${id}`
    return  this.httpClient.delete<void>(url)
  }


}
