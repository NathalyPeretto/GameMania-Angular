import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../models/noticias';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //Variavel criada para armazenar o endereço da API
  url = "http://localhost:3000/noticias";

  // Insere a dependencia HttpClient que comunica com API
  constructor(private httpClient: HttpClient) { }

  // Variavel que armazena as configurações dos header da requisição - mandar configurações 
  // para API
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  // Método get que vai trazer as notícias da API - observable é uma estrutura de método do angular
  getNoticias(): Observable<Noticias[]> {
    return this.httpClient.get<Noticias[]>(this.url)
  }

} 







