import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'empresas',
        pathMatch: 'full'
    },
    {
        path: 'empresas',
        loadComponent: () =>
            import('./features/empresas/pages/empresa-lista/empresa-lista')
                .then(component => component.EmpresaLista)
    },
    {
        path: 'empresas/nova',
        loadComponent: () =>
            import('./features/empresas/pages/empresa-formulario/empresa-formulario')
                .then(m => m.EmpresaFormulario)
    }
];
