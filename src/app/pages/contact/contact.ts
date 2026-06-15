import { Component, signal, afterNextRender } from '@angular/core';
import { LucideArrowBigRight } from '@lucide/angular';

declare var anime: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideArrowBigRight],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  email = signal('joserogeriofonsecaneto@gmail.com');
  telefone = signal('(84) 99999-9999');

  redesSociais = signal([
    { nome: 'GitHub', link: 'https://github.com/RogerioNeto07', icone: 'fab fa-github fa-xl' },
    { nome: 'LinkedIn', link: 'https://linkedin.com/in/xxx', icone: 'fab fa-linkedin fa-xl' },
    { nome: 'Instagram', link: 'https://instagram.com/jrogerioneto', icone: 'fab fa-instagram fa-xl' },
    { nome: 'Twitter', link: 'https://twitter.com', icone: 'fab fa-twitter fa-xl' }
  ]);

  constructor() {
    afterNextRender(() => {
      anime({
        targets: '.animar-contato',
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(120),
        duration: 900,
        easing: 'easeOutQuad'
      });
    });
  }
}