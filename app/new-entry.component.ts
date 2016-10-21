import { Component, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'new-entry',
  template: `
    <div class="col-xs-6">
      <div class="well">
        <h1>New Entry</h1>
        <div class="well form-group">
          <label>Enter Date:</label><br>
          <input #newDate>
        </div>
        <div class="well form-group">
          <label>Enter Food Type:</label><br>
          <input #newFood>
        </div>
        <div class="well form-group">
          <label>Enter Calories:</label><br>
          <input #newCalories>
        </div>
        <div class="well form-group">
          <label>Enter Description:</label><br>
          <input #newDescription>
        </div>
        <div>
          <button id="addButton" (click)="
          addClicked(newDate.value, newFood.value, newCalories.value, newDescription.value);
          newDate.value='';
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
  addClicked(date: string, food: string, calories: number, description: string) {
    var newEntryToAdd: Entry = new Entry(date, food, calories, description);
    this.newEntrySender.emit(newEntryToAdd);
  }
}
