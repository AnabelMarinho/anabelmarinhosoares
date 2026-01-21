import { Component } from '@angular/core';
import { BorderOrnament } from '../../core/components/border-ornament/border-ornament';
import { InfiniteCarousel } from '../infinite-carousel/infinite-carousel';
import { Contact } from '../../core/components/contact/contact';

@Component({
  selector: 'app-profile-section',
  imports: [BorderOrnament, InfiniteCarousel, Contact],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.css',
})
export class ProfileSection {

}
