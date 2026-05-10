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
  email = signal('joser@exemplo.com');
  telefone = signal('(84) 99999-9999');

  redesSociais = signal([
    { nome: 'GitHub', link: 'https://github.com/seuuser', icone: 'fab fa-github fa-xl' },
    { nome: 'LinkedIn', link: 'https://linkedin.com/in/seuuser', icone: 'fab fa-linkedin fa-xl' },
    { nome: 'Instagram', link: 'https://instagram.com/seuuser', icone: 'fab fa-instagram fa-xl' },
    { nome: 'Twitter', link: 'https://twitter.com/seuuser', icone: 'fab fa-twitter fa-xl' }
  ]);
}