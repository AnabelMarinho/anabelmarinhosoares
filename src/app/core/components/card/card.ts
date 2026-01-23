import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input() title!: string;
@Input() text!: string;
@Input() image!: string;
@Input() link!: string;
@Input() tags: string[] = [];

expanded = false;
toggleExpanded()  {
  this.expanded = !this.expanded;
}
}