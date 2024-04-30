import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  
})
export class HomePageComponent implements OnInit {
  title = 'home-page';
  searchText = '';
  constructor(
    private route: Router,
  ){}
  ngOnInit(): void {
    
  }
  
  
}
