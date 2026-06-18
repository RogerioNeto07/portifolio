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
      
      setTimeout(() => {
        anime({
          targets: '.svg-demonstracao path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1200,
          direction: 'alternate',
          loop: true
        });

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