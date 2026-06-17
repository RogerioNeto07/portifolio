import { Component, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowBigRight } from '@lucide/angular';

declare var anime: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LucideArrowBigRight],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  constructor() {
    afterNextRender(() => {
      
      // O setTimeout garante que o SVG já foi renderizado na tela antes do cálculo
      setTimeout(() => {
        // 1. Força o Anime.js a calcular e animar o traçado do zero
        anime({
          targets: '.svg-demonstracao path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1200,
          direction: 'alternate',
          loop: true
        });

        // 2. Animação dos textos e botões logo em seguida
        anime({
          targets: '.home-container h1, .home-container p, .home-container .card-botao',
          translateY: [40, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100, { start: 200 }),
          easing: 'easeOutQuad'
        });
      }, 50);

    });
  }
}