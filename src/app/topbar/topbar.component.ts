import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  isHidden = false;
  isScrolled = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > this.lastScrollTop) {
      this.isHidden = true; // Sembunyikan header saat scroll ke bawah
    } else {
      this.isHidden = false; // Tampilkan header saat scroll ke atas
    }
    
    this.isScrolled = st > 100; // Tambahkan kelas 'scrolled' saat scroll lebih dari 100px
    this.lastScrollTop = st <= 0 ? 0 : st; // Untuk iOS dan mobile lainnya
  }
}
