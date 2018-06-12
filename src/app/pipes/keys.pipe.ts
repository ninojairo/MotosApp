import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  keys : any[] =[];

  transform(value: any ): any {

    for(let i in value){

      this.keys.push(i);

    }
    
    return this.keys;
  }

  
}
