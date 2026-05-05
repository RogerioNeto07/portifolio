import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  email = signal('joser@exemplo.com');
  telefone = signal('(84) 99999-9999');

  redesSociais = signal([
    { nome: 'GitHub', link: 'https://github.com/seuuser', icone: 'fab fa-github' },
    { nome: 'LinkedIn', link: 'https://linkedin.com/in/seuuser', icone: 'fab fa-linkedin' },
    { nome: 'Instagram', link: 'https://instagram.com/seuuser', icone: 'fab fa-instagram' },
    { nome: 'Twitter', link: 'https://twitter.com/seuuser', icone: 'fab fa-twitter' }
  ]);
}