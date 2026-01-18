import { Component } from '@angular/core';
import { BorderOrnament } from '../../core/components/border-ornament/border-ornament';
import { InfiniteCarousel } from '../infinite-carousel/infinite-carousel';

@Component({
  selector: 'app-profile-section',
  imports: [BorderOrnament, InfiniteCarousel],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.css',
})
export class ProfileSection {

}
