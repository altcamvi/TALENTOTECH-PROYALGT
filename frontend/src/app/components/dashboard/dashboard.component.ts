import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html' })
export class DashboardComponent implements OnInit {
  usuarioId = 1; // Simulado o obtenido por token
  notas: any[] = [];
  asignatura = '';
  valor = 0;

  constructor(private notaService: NotaService) {}

  ngOnInit() {
    this.cargarNotas();
  }

  cargarNotas() {
    this.notaService.obtenerNotas(this.usuarioId).subscribe((data: any) => this.notas = data);
  }

  agregarNota() {
    this.notaService.crearNota({ usuarioId: this.usuarioId, asignatura: this.asignatura, valor: this.valor })
      .subscribe(() => this.cargarNotas());
  }

  eliminarNota(id: number) {
    this.notaService.eliminarNota(id).subscribe(() => this.cargarNotas());
  }
}

/*

import { Component } from '@angular/core';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html' })
export class DashboardComponent {}

*/