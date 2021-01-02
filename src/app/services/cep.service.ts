import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }
  resultado:Cep;

  getCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    .subscribe(data => this.resultado = this.converterRespostaParaCep(data));
  }

  private converterRespostaParaCep(cepNaResposta: any):Cep{
    let cep = new Cep();
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.complemento = cepNaResposta.complemento;
    cep.bairro = cepNaResposta.bairro;
    cep.localidade = cepNaResposta.localidade;
    cep.uf = cepNaResposta.uf;

    return cep;
  }
}
