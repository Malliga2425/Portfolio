import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  isCrystalActive = false;
  private intervalId!: number;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.isCrystalActive = true;

      // Remove crystal effect after 1.5 seconds
      setTimeout(() => {
        this.isCrystalActive = false;
      }, 1500);

    }, 5000); // every 5 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // prevent memory leak
  }
}
