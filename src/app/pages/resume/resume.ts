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
    'Angular', 'TypeScript', 'CSS Grid', 'Node.js', 'Git/GitHub', 'Nebular'
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