import { Component, afterNextRender, signal } from '@angular/core';

declare var anime: any;

@Component({
  selector: 'app-mouse-follower',
  standalone: true,
  templateUrl: './mouse-follower.html',
  styleUrls: ['./mouse-follower.css']
})
export class MouseFollower {
  position = signal({ x: 0, y: 0 });

  constructor() {
    afterNextRender(() => {
      this.initMouseFollower();
    });
  }

  private initMouseFollower() {
    const ball = document.querySelector('.mouse-ball') as HTMLElement;
    if (!ball) return;

    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    const speed = 0.05;

    const animate = () => {
      ballX += (mouseX - ballX) * speed;
      ballY += (mouseY - ballY) * speed;
      
      this.position.set({ x: ballX, y: ballY });
      
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    animate();

    anime({
      targets: '.mouse-ball',
      scale: [0, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutQuad'
    });
  }
}