import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.API}/login`, { email, password });
  }
  registrar(data: any) {
    return this.http.post(`${this.API}/registro`, data);
  }
}