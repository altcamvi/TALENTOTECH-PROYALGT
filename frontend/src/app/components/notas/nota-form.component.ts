import { Component } from '@angular/core';
import { NotaService } from '../../services/nota.service';

@Component({ selector: 'app-nota-form', templateUrl: './nota-form.component.html' })
export class NotaFormComponent {
  usuarioId = 1;
  asignatura = '';
  valor = 0;

  constructor(private notaService: NotaService) {}

  agregarNota() {
    this.notaService.crearNota({ usuarioId: this.usuarioId, asignatura: this.asignatura, valor: this.valor })
      .subscribe(() => {
        this.asignatura = '';
        this.valor = 0;
      });
  }
}