import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    { id: 1, title: 'Card1', logo: 'assets/image2.jpg', description: 'This is a Bear' },
    { id: 2, title: 'Card2', logo: 'assets/image.jpg', description: 'This is Bird' },
    { id: 3, title: 'Card3', logo: 'assets/image3.jpg', description: 'This is a Barracuda' }
  ];

  showAlert() {
    alert('¡Bienvenido!');
  }

  filterById() {
    this.cards = this.cards.filter(item => item.id > 1);
  }
}