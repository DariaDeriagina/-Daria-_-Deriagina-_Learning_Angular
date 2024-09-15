import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Use 'styleUrls' and pass an array
})
export class AppComponent {
  title = 'Daria_Deriagina_Learning_Angular';
  age = 36; // Declare the 'age' variable
  city = 'Windsor'; // Declare the 'city' variable
}
