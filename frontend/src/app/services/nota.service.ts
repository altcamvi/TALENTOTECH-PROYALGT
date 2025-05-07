import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NotaService {
  private API = 'http://localhost:3000/api/notas';

  constructor(private http: HttpClient) {}

  obtenerNotas(usuarioId: number) {
    return this.http.get(`${this.API}/${usuarioId}`);
  }
  crearNota(data: any) {
    return this.http.post(this.API, data);
  }
  actualizarNota(id: number, data: any) {
    return this.http.put(`${this.API}/${id}`, data);
  }
  eliminarNota(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}