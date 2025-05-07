import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';

@Component({ selector: 'app-notas-lista', templateUrl: './notas-lista.component.html' })
export class NotasListaComponent implements OnInit {
  usuarioId = 1;
  notas: any[] = [];

  constructor(private notaService: NotaService) {}

  ngOnInit() {
    this.cargarNotas();
  }

  cargarNotas() {
    this.notaService.obtenerNotas(this.usuarioId).subscribe((data: any) => this.notas = data);
  }

  eliminarNota(id: number) {
    this.notaService.eliminarNota(id).subscribe(() => this.cargarNotas());
  }
}