import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class StudentService {

  private _getStudentUrl = "http://localhost:8080/student";
  

  constructor(private http: HttpClient) { }

  getStudent() {
    return this.http.get<any>(this._getStudentUrl)
  }

}