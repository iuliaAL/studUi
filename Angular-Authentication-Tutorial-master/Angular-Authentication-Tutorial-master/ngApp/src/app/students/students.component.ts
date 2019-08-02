import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'; 
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = []
  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this._studentService.getStudent()
      .subscribe(
        res => this.students = res,
        err => console.log(err)
      )
  }

}
