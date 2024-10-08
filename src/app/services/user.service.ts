 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root'
})
 export class UserService{
  private empApiUrl = 'http://localhost:8082/Movie/user';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
   };
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any> {
    return this.http.get(`${this.empApiUrl}/listallusers`);
  }
  // getEmployees(page: number) {
  //   return this.http.get(`${this.empApiUrl}?_page=${page}`);
  // }
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.empApiUrl}/finduser/{uid}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.empApiUrl}/addUser`, user,this.httpOptions);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.empApiUrl}/updateuser`, user,this.httpOptions);
  }

  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.empApiUrl}/deleteuser/{uid}`);
  }

  getUserByName(username: string): Observable<string> {
    return this.http.get<string>(`${this.empApiUrl}/finduserbyname/{name}`);
  }
}
