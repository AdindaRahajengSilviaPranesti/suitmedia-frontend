import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  newsItems = [
    { date: '2024-08-01', title: 'The Rise of AI in Digital Marketing', image: 'assets/img/berita1.png' },
    { date: '2024-08-02', title: 'Top 10 JavaScript Frameworks to Watch', image: 'assets/img/berita2.jpeg' },
    { date: '2024-08-03', title: 'Cloud Computing Trends in 2024', image: 'assets/img/berita3.png' },
    { date: '2024-08-04', title: 'Understanding Blockchain Technology', image: 'assets/img/berita5.jpg' },
    { date: '2024-08-05', title: '5G Technology: What You Need to Know', image: 'assets/img/berita4.jpg' },
    { date: '2024-08-06', title: 'The Future of Cybersecurity', image: 'assets/img/berita3.png' },
    { date: '2024-08-07', title: 'Innovations in Web Development', image: 'assets/img/berita2.jpeg' },
    { date: '2024-08-08', title: 'Digital Transformation in Enterprises', image: 'assets/img/berita1.png' },
    { date: '2024-08-09', title: 'The Impact of Social Media on Business', image: 'assets/img/berita3.png' },
    { date: '2024-08-10', title: 'How to Optimize Your Website for SEO', image: 'assets/img/berita4.jpg' },
    { date: '2024-08-11', title: 'Trends in Mobile App Development', image: 'assets/img/berita5.jpg' },
    { date: '2024-08-12', title: 'E-commerce: The Future of Retail', image: 'assets/img/berita2.jpeg' },
    { date: '2024-08-13', title: 'Augmented Reality: The Next Big Thing', image: 'assets/img/berita3.png' },
    { date: '2024-08-14', title: 'Navigating the Internet of Things', image: 'assets/img/berita4.jpg' },
    { date: '2024-08-15', title: 'The Role of Data Analytics in Business', image: 'assets/img/berita1.png' },
    { date: '2024-08-16', title: 'Tech Skills in Demand for 2024', image: 'assets/img/berita5.jpg' },
    { date: '2024-08-17', title: 'Remote Work: The New Normal', image: 'assets/img/berita4.jpg' },
    { date: '2024-08-18', title: 'Artificial Intelligence in Healthcare', image: 'assets/img/berita2.jpeg' },
    { date: '2024-08-19', title: 'The Evolution of UX Design', image: 'assets/img/berita3.png' },
    { date: '2024-08-20', title: 'Sustainability in Technology', image: 'assets/img/berita1.png' }
  ];

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.parallaxEffect);
  }

  parallaxEffect() {
    const bannerImage = document.querySelector('.banner-image img') as HTMLElement;
    if (bannerImage) {
      bannerImage.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    }
  }
}
