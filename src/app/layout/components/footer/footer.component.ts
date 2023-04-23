import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  showScrollToTopButton:boolean = false;
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    if (window.pageYOffset > 10) {
      // Show the "scroll to top" button
      this.showScrollToTopButton = true;
    } else {
      // Hide the "scroll to top" button
      this.showScrollToTopButton = false;
    }
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
