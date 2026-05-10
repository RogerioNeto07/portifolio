import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  formacao = signal([
    { curso: 'Técnico em Informática', instituicao: 'IFRN', ano: '2023 - Cursando' }
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
      desc: 'Desenvolvimento de interfaces ricas com foco em usabilidade e Angular.' 
    },
    { 
      cargo: 'Monitoria', 
      empresa: 'IFRN', 
      desc: 'Auxílio a alunos nas disciplinas de programação estruturada.' 
    }
  ]);
}