import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpHeaders: HttpHeaders;


  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem("access_token")
      
    });
  }

  private getHttpOptions(): any {
    return {
      headers: this.httpHeaders,
    };
  }

  private baseUrl = 'http://localhost:8080';

loginUser(credentials: { email: string, password: string }): Observable < any > {
  return this.http.post<any>(`${this.baseUrl}/loginAccount`, credentials);
}

register(user: any): Observable < any > {
  return this.http.post<any>(`${this.baseUrl}/register`, user);
}

getAllPackages(): Observable < any > {
  return this.http.get<any>(`${this.baseUrl}/getAllPackage`, this.getHttpOptions());
}

addPackage(tourPackage: any): Observable < any > {
  console.log("Tour Package Data:", tourPackage);
  return this.http.post<any>(`${this.baseUrl}/addPackage`, tourPackage,this.getHttpOptions());
}

getAllUsers(): Observable < any > {
  return this.http.get<any>(`${this.baseUrl}/getAllUser`,this.getHttpOptions());
}

bookPackage(bookingData:any) {
  console.log(bookingData)
  return this.http.post(`${this.baseUrl}/addBooking`,bookingData,this.getHttpOptions());
}

}