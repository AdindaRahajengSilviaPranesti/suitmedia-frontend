import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit() {
    // Logika untuk mengirim pesan atau menampilkan pesan sukses
    alert('Pesan Anda telah terkirim!');
  }
}
