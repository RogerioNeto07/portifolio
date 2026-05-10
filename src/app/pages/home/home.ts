import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowBigRight } from '@lucide/angular';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LucideArrowBigRight],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
