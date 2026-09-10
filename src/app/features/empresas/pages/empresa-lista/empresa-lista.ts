import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from "@angular/router";

import { Empresa } from '../../models/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './empresa-lista.html',
  styleUrl: './empresa-lista.scss',
})
export class EmpresaLista implements OnInit {

  private readonly empresaService = inject(EmpresaService);

  empresas: Empresa[] = [];

  ngOnInit(): void {
    console.log('EmpresaLista iniciou');
    this.carregarEmpresas();
  }

  carregarEmpresas(): void {

    console.log('Chamando API...');

    this.empresaService.listar().subscribe({

      next: (empresas: Empresa[]) => {
        console.log('EMPRESAS RECEBIDAS:', empresas);

        this.empresas = [...empresas];

        console.log('EMPRESAS NO COMPONENTE:', this.empresas);
      },

      error: (erro) => {
        console.error('Erro ao carregar empresas:', erro);
      }

    });
  }
}