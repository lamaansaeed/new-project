import { Component } from '@angular/core';
//import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
//import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HomeComponent,
    CommonModule,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
