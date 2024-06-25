import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('toggleBtn', { static: false }) toggleBtn!: ElementRef;
  @ViewChild('bigWrapper', { static: false }) bigWrapper!: ElementRef;
  @ViewChild('hamburgerMenu', { static: false }) hamburgerMenu!: ElementRef;
  dark = false;

  constructor(private elementRef: ElementRef, private router: Router) {}

  ngAfterViewInit() {
    this.declare();
    this.events();
  }

  declare() {
    // No need to query the DOM as we are using ViewChild
  }

  toggleAnimation() {
    // Clone the wrapper
    this.dark = !this.dark;
    let clone = this.bigWrapper.nativeElement.cloneNode(true);
    if (this.dark) {
      clone.classList.remove('light');
      clone.classList.add('dark');
    } else {
      clone.classList.remove('dark');
      clone.classList.add('light');
    }
    clone.classList.add('copy');
    this.elementRef.nativeElement.querySelector('main').appendChild(clone);

    document.body.classList.add('stop-scrolling');

    clone.addEventListener('animationend', () => {
      document.body.classList.remove('stop-scrolling');
      this.bigWrapper.nativeElement.remove();
      clone.classList.remove('copy');
      // Reset Variables
      this.declare();
      this.events();
    });
  }

  events() {
    this.toggleBtn.nativeElement.addEventListener('click', () =>
      this.toggleAnimation()
    );
    this.hamburgerMenu.nativeElement.addEventListener('click', () => {
      this.bigWrapper.nativeElement.classList.toggle('active');
    });
  }

  redirectToLogin() {
    this.router.navigate(['/landing/login']);
  }
  redirectSignup() {
    this.router.navigate(['/landing/signup']);
  }
  redirectToServices() {
    this.router.navigate(['/dashboard/services']);
  }
}
