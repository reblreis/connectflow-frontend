import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Empresa } from '../models/empresa';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {

    private readonly http = inject(HttpClient);

    private readonly apiUrl = '/api/empresas';

    listar(): Observable<Empresa[]> {
        return this.http.get<Empresa[]>(this.apiUrl);
    }
}