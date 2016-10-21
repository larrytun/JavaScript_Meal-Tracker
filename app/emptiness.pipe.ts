import {Pipe, PipeTransform} from '@angular/core';
import { Entry } from './entry.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Entry[], desiredFullness) {
    var output: Entry[] = [];
    for(var i = 0; i < input.length; i++){
      if(input[i].pintsLeft <= 0){
        console.log("Warning! " + input[i].name + " is empty")
      }
    }
    if(desiredFullness === "almostEmpty"){
      for(var i = 0; i < input.length; i++){
        if(input[i].pintsLeft < 10){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredFullness === "full"){
      for(var i = 0; i <input.length; i++){
        if(input[i].pintsLeft >= 10){
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
