import { Component, input, output } from '@angular/core';
import { ResumirPipe } from '../../pipes/resumir-pipe';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [ResumirPipe],
  templateUrl: './card-projeto.html',
  styleUrls: ['./card-projeto.css'],
})
export class CardProjeto {
  projeto = input.required<{nome: string, desc: string}>();
  clicado = output<string>();

  notificarPai() {
    this.clicado.emit(this.projeto().nome);
  }
}