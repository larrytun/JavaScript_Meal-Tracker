import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-list',
  template: `
  <div class="row">
    <div id="options" class="col-xs-6 col-xs-offset-5">
      <select id="dropDown" (change)="onChange($event.target.value)" class="selectpicker">
        <option value="all" selected="selected">Show All</option>
        <option value="low">Show low calories</option>
        <option value="high">Show high calories</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentEntry of childEntryList | fatty:selectedCalories">
    <div id="list" class="col-xs-4">
      <h3>{{currentEntry.food }}</h3>
      <h4>Calories: {{currentEntry.calories}}</h4>
      <p>Description: {{currentEntry.description}}
      <button (click)="editButtonHasBeenClicked(currentEntry)"
      class="btn btn-danger"
      id="editButton">Edit</button>
    </div>
  </div>
  `
})

export class EntryListComponent {
  @Input() childEntryList: Entry[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "all";
  onChange(optionFromMenu){
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editButtonHasBeenClicked(entryToEdit: Entry) {
    this.clickSender.emit(entryToEdit);
  }
}
