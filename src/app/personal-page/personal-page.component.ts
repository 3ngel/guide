import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { PassThrough } from 'stream';
import { Guide } from '../requests';

@Component({
  selector: 'personal-page',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.css'
})
export class PersonalPageComponent {
  title = 'persnal-page';
  api_name ="https://api.g-shamkhal.ru";
  subcribe:any;
  id:any;
  data:any;
  public guide = {} as Guide;
  constructor(private route: Router,  private acrout: ActivatedRoute){
    this.subcribe = this.acrout.params.subscribe(params=>this.id=params['name'])
  }

  ngOnInit():void{
    this.load();
  }
  async load(){
    let method=this.api_name+"/GetArticleById?id="+this.id;
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
    this.guide=this.data;
  }
}
