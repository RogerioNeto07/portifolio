import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  formacao = signal([
    { curso: 'Análise e Desenvolvimento de Sistemas', instituicao: 'IFRN', ano: '2023 - Cursando' }
  ]);

  habilidades = signal([
    { nome: 'Angular', docs: 'https://angular.dev/overview' },
    { nome: 'TypeScript', docs: 'https://www.typescriptlang.org/docs/' },
    { nome: 'CSS Grid', docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout' },
    { nome: 'Node.js', docs: 'https://nodejs.org/en/docs/' },
    { nome: 'Git/GitHub', docs: 'https://git-scm.com/doc' },
    { nome: 'Nebular', docs: 'https://akveo.github.io/ng-nebular/' }
  ]);

  experiencias = signal([
    { 
      cargo: 'Desenvolvedor Front-end', 
      empresa: 'Projeto Acadêmico', 
      desc: 'Desenvolvedor no projeto PartiuIF no NADIC.' 
    },
    { 
      cargo: 'Esragiário', 
      empresa: 'Ci-Tech', 
      desc: 'Auxílio em manutenção de desktops e notebooks' 
    }
  ]);
}