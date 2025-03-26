import { Component, EnvironmentProviders, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Guide } from '../requests';
import { SearchPipe } from '../search.pipe';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';


@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink, RouterLinkActive, RouterOutlet, HomePageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  
})
export class HomePageComponent implements OnInit {
  title = 'home-page';
  public search:any;
  public searchText:any;
  api_name = 'https://api.info-search.ru';
  data: any;
  lists = [{}as Guide];
  constructor(
    private route: Router,
    private svc: DataService,
  ){}
  ngOnInit(): void {
    this.searchText = "";
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
