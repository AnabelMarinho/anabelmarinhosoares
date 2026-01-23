import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { BorderOrnament } from './core/components/border-ornament/border-ornament';
import { ProfileSection } from './components/profile-section/profile-section';
import { AcademicEducation } from './components/academic-education/academic-education';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { TechStackBar } from './components/tech-stack-bar/tech-stack-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, BorderOrnament, ProfileSection, AcademicEducation, Projects, TechStackBar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('portfolio-anabel');
}
