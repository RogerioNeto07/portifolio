import { Component, signal } from '@angular/core';
import { LucideArrowBigRight } from '@lucide/angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideArrowBigRight],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  email = signal('joserogeriofonsecauzl@gmail.com');
  telefone = signal('(84) 99999-9999');

  redesSociais = signal([
    { nome: 'GitHub', link: 'https://github.com/RogerioNeto07', icone: 'fab fa-github fa-xl' },
    { nome: 'LinkedIn', link: 'https://linkedin.com/in/josé-rogério', icone: 'fab fa-linkedin fa-xl' },
    { nome: 'Instagram', link: 'https://instagram.com/jrogerioneto', icone: 'fab fa-instagram fa-xl' },
    { nome: 'Twitter', link: 'https://twitter.com', icone: 'fab fa-twitter fa-xl' }
  ]);
}