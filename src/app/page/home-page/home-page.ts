import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { BorderOrnament } from '../../core/components/border-ornament/border-ornament';
import { ProfileSection } from '../../components/profile-section/profile-section';
import { AcademicEducation } from '../../components/academic-education/academic-education';
import { Projects } from '../../components/projects/projects';
import { TechStackBar } from '../../components/tech-stack-bar/tech-stack-bar';
import { FormControlDirective } from '@angular/forms';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    Header,
    BorderOrnament,
    ProfileSection,
    AcademicEducation,
    Projects,
    TechStackBar,
    Footer
  ],
  templateUrl: './home-page.html'
})
export class HomePage {}
