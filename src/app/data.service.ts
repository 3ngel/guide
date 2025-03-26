import { Injectable } from '@angular/core';
import { Guide } from './requests';
import internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data = [{}as Guide];
  answer = {} as any;
  // datagive(){
  //   this.data =[
  //     {
  //       id:1,
  //       name: 'Статья 1',
  //       section:'Общий',
  //       articleText: 'Как-то давно за долго до появления динозавров появились дедлайны',
  //       creationDate: '2024-10-25'
  //     },
  //     {
  //       id:2,
  //       name: 'name2',
  //       section:'Общий',
  //       articleText: '',
  //       creationDate: '2024-10-25'
  //     },
  //     {
  //       id:3,
  //       name: 'name3',
  //       section:'Общий',
  //       articleText: '',
  //       creationDate: '2024-10-25'
  //     },{
  //       id:4,
  //       name: 'name4',
  //       section:'Общий',
  //       articleText: '',
  //       creationDate: '2024-10-25'
  //     },
  //     {
  //       id:5,
  //       name: 'name5',
  //       section:'Общий',
  //       articleText: '',
  //       creationDate: '2024-10-25'
  //     }
  
  //   ]; 
  //   return this.data;
  // }
  getguide(index: any){
    this.answer = this.data.filter((obj: Guide)=> {
      return obj.id === 1;
    });
    console.log(this.answer);
    return this.answer
  }
}
