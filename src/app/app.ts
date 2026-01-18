import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { BorderOrnament } from './core/components/border-ornament/border-ornament';
import { ProfileSection } from './components/profile-section/profile-section';
import { AcademicEducation } from './components/academic-education/academic-education';

@Component({
  selector: 'app-root',
  imports: [Header, BorderOrnament, ProfileSection, AcademicEducation],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('portfolio-anabel');
}
