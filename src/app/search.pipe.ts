import { Pipe, PipeTransform } from '@angular/core';
   
    @Pipe({  name: 'search'})
   export class SearchPipe implements PipeTransform {
        transform(value: any, arg?: any): any {
            if(!value) return null;
            if(!arg) return value;
            
            arg = arg.toUpperCase();
            return value.filter((item:any)=>{
                return JSON.stringify(item).toUpperCase().includes(arg);
            });
         }
    }