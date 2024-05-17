import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Guide } from '../requests';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink, RouterLinkActive, RouterOutlet, HomePageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  
})
export class HomePageComponent implements OnInit {
  title = 'home-page';
  public searchText:any;
  api_name = 'https://api.g-shamkhal.ru';
  data: any;
  lists = [{}as Guide];
  constructor(
    private route: Router
  ){}
  ngOnInit(): void {
    this.load();
  }
  async load(){
    let method=this.api_name+"/GetArticles"
    let response = await fetch(method,{
      method: 'GET',
      mode:'cors',
      // credentials: 'include'
    }).then((response)=>{
      return response.text();
    })
    .then(function(data) {
      console.log(data);
      return new Promise((resolve, reject)=>{
        resolve(data ? JSON.parse(data) : {})
    })
    });
    console.log(response);
    this.data = response;
    this.lists = this.data;
  }  
}
