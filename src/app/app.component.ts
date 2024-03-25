import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Monika Singh';
  tabs=[];

}
