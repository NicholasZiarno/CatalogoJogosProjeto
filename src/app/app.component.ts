import { Component } from '@angular/core';
import { JogoService } from './jogo.service';
import { IntJogos } from './IntJogos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CatalogoJogosProjeto';

  constructor(private jogoService: JogoService){}

  obterTodosJogos(){
    this.jogoService.obterTodos()
    .then(jogo => console.log(jogo))
    .catch(error => console.error(error));
  }

  adicionarJogo(){
    const jogo: IntJogos = {
      id: 11,
      titulo: "Dayz",
      descricao: "Quanto você aguenta em um mundo pós-apocalíptico? Uma terra arrasada por zumbis infectados, onde você compete com outros sobreviventes por recursos limitados. Você vai ajudar estranhos em sua luta? Ou evitará traições como um lobo solitário? Esse é o DayZ. Essa é a sua história",
      dataDeLancamento: "13/12/2018",
      generos: "Mundo aberto, sobrevivência, zumbis, ação",
      desenvolvedora: "Bohemia Interactive"
    }
     
    this.jogoService.adicionar(jogo)
     .then(jogo => console.log('+ adicionado'))
     .catch(error => console.error(error));
  }

  atualizarJogo(){
   const jogo: IntJogos = {
     id: 9,
     titulo: " Triathlon Simulator",
     descricao: "Pedale, nade, , corra",
     dataDeLancamento: "01/02/2003",
     generos: "Corrida, natureza, bicicleta, mundo aberto",
     desenvolvedora: "DaEsquina Games"
   }
    
   this.jogoService.atualizar(jogo)
    .then(jogo => console.log('* atualizar,', jogo))
    .catch(error => console.error(error))
  }
  
  removerJogo(){
    this.jogoService.delete(5)
    .then((jogo: any) => console.log(jogo))
    .catch((error: any) => console.error(error))
  }
}