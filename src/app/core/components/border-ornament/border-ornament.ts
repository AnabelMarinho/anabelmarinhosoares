import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-border-ornament',
  imports: [CommonModule],
  templateUrl: './border-ornament.html',
  styleUrl: './border-ornament.css',
})
export class BorderOrnament {
@Input() variant: 'horizontal' | 'vertical' = 'horizontal';
}
