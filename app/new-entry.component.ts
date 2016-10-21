import { Component, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'new-entry',
  template: `
    <div class="col-xs-6">
      <div class="well">
        <h1>New Entry</h1>
        <div class="form-group">
          <label>Enter Food Type:</label><br>
          <input #newFood>
        </div>
        <div class="form-group">
          <label>Enter Calories:</label><br>
          <input #newCalories>
        </div>
        <div class="form-group">
          <label>Enter Description:</label><br>
          <input #newDescription>
          <button (click)="
          addClicked(newFood.value, newCalories.value, newDescription.value);
          newFood.value='';
          newCalories.value='';
          newDescription.value='';
          " class="add-entry btn btn-danger">Add</button>
        </div>
      </div>
    </div>

  `
})

export class NewEntryComponent {
  @Output() newEntrySender = new EventEmitter();
  addClicked(food: string, calories: number, description: string) {
    var newEntryToAdd: Entry = new Entry(food, calories, description);
    this.newEntrySender.emit(newEntryToAdd);
  }
}
