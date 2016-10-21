import {Pipe, PipeTransform} from '@angular/core';
import { Entry } from './entry.model';

@Pipe({
  name: "fatty",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Entry[], desiredCalories) {
    var output: Entry[] = [];
    for(var i = 0; i < input.length; i++){
      if(input[i].calories <= 0){
        console.log("Calories")
      }
    }
    if(desiredCalories === "low"){
      for(var i = 0; i < input.length; i++){
        if(input[i].calories < 350){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredCalories === "high"){
      for(var i = 0; i <input.length; i++){
        if(input[i].calories >= 350){
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
