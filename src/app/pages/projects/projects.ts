import { Component, signal, afterNextRender } from '@angular/core';
import { CardProjeto } from '../../components/card-projeto/card-projeto';

// Diz para o TypeScript não reclamar, pois a variável 'anime' virá do index.html
declare var anime: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjeto],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  meusProjetos = signal([
    { 
      nome: 'PartiuIF',
      img: 'images/partiu_if.jpg',
      desc: 'Sistema de cadastro e gerenciamento de bolsas dos alunos dos IFs do nordeste.' 
    },
    { 
      nome: 'BibliONteca', 
      img: 'images/biblionteca.png',
      desc: 'Sistema de gerenciamento de bibliotecas' 
    },
    { 
      nome: 'IFConnect',
      img: 'images/IFConnect.png', 
      desc: 'Sistema de comunicação entre alunos e professores do IF.' 
    },
    { 
      nome: 'Artisan',
      img: 'images/Artisan.png', 
      desc: 'Sistema de compra e venda de artesanatos.' 
    },
  ]);

  constructor() {
    afterNextRender(() => {
      anime({
        targets: '.projetos-grid .animar-card',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 1000,
        easing: 'easeOutQuad'
      });
    });
  }

  aviso(nome: string) {
    alert('Você clicou no projeto: ' + nome + '. Gostaria de acessar mais detalhes? acesse o repositório do projeto no GitHub!: https://github.com/RogerioNeto07');
  }
}