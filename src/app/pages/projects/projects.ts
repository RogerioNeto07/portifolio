import { Component, signal } from '@angular/core';
import { CardProjeto } from '../../components/card-projeto/card-projeto';

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
    img: 'images/luffy_baseball.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
  },
  { 
    nome: 'BibliONteca', 
    img: 'images/biblionteca.png',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
  },
  { 
    nome: 'Portfólio',
    img: 'images/bleach.jpg', 
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
  },
  { 
    nome: 'Angular v24',
    img: 'images/law.jpg', 
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  }
]);

  aviso(nome: string) {
    alert('Você clicou no projeto: ' + nome);
  }
}