import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IntJogos } from './IntJogos';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private httpClient: HttpClient) { }

  obterTodos() {
    return lastValueFrom(this.httpClient.get<IntJogos[]>(`${API_PATH}jogos`));
  }

  adicionar(jogo: IntJogos){
    return lastValueFrom(this.httpClient.post<IntJogos>(`${API_PATH}jogos`, jogo));
  }
   
  atualizar(jogo: IntJogos){
    return lastValueFrom(this.httpClient.put<IntJogos>(`${API_PATH}jogos`, jogo.id))
}
  
  delete(jogoId: number){
    return lastValueFrom(this.httpClient.delete(`${API_PATH}jogos/${jogoId}`))
  }
}
