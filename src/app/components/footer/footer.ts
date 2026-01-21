import { Component } from '@angular/core';
import { Contact } from '../../core/components/contact/contact';

@Component({
  selector: 'app-footer',
  imports: [Contact],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
}
