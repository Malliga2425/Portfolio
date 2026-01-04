import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reading-progress.component.html',
  styleUrls: ['./reading-progress.component.css']
})
export class ReadingProgressComponent {
  progress = signal(0);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    this.progress.set(scrolled);
  }
}
