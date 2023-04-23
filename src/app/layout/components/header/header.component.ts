import { Component, OnInit, ElementRef, HostListener, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuActive = false;

  @ViewChild('hamburger', { static: true }) menuRef!: ElementRef;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.menuRef.nativeElement.contains(event.target)) {
      this.isMenuActive = false;
    }
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  ngOnInit(): void {}
}
