import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingProgressComponent } from '../reading-progress/reading-progress.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReadingProgressComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
