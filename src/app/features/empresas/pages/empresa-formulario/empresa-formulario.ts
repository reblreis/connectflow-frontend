import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empresa-formulario.html',
  styleUrl: './empresa-formulario.scss',
})
export class EmpresaFormulario {

  private readonly empresaService = inject(EmpresaService);
  private readonly router = inject(Router);

  empresa: Empresa = {
    id: '',
    nome: '',
    cnpj: '',
    email: '',
    ativa: true
  };

  salvar(): void {
    console.log('Empresa para salvar:', this.empresa);

    // Vamos implementar a chamada POST no próximo passo.
  }

  voltar(): void {
    this.router.navigate(['/empresas']);
  }
}
