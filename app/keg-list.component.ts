import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';
import { PourBeerComponent } from './pour-beer.component';

@Component({
  selector: 'entry-list',
  template: `
  <div class="row">
    <div id="options" class="col-xs-6 col-xs-offset-5">
      <select id="dropDown" (change)="onChange($event.target.value)" class="selectpicker">
        <option value="all" selected="selected">Show All</option>
        <option value="almostEmpty">Show Almost Empty!</option>
        <option value="full">Show Full</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentEntry of childEntryList | emptiness:selectedEmptiness">
    <div id="list" class="col-xs-4">
      <div [class.cheapBeer]="currentEntry.price < 5.5">
      <div [class.tipsyBeer]="currentEntry.abv > 6">
      <div [class.beer]="currentEntry.price > 0">
        <h3>{{ currentEntry.brand }}</h3>
        <h4>{{currentEntry.name}}</h4>
        <p>Cost: $ {{currentEntry.price}}</p>
        <p>ABV: {{currentEntry.abv}}%</p>
        <p>Pints until empty: {{currentEntry.pintsLeft}}</p>
        <pour-beer [childEntry]="currentEntry"></pour-beer>
        <button (click)="editButtonHasBeenClicked(currentEntry)"
        class="btn btn-danger"
        id="editButton">Edit</button>
      </div>
      </div>
      </div>
    </div>
  </div>
  `
})

export class EntryListComponent {
  @Input() childEntryList: Entry[];
  @Output() clickSender = new EventEmitter();
  public selectedEmptiness: string = "all";
  onChange(optionFromMenu){
    this.selectedEmptiness = optionFromMenu;
    console.log(this.selectedEmptiness);
  }
  editButtonHasBeenClicked(entryToEdit: Entry) {
    this.clickSender.emit(entryToEdit);
  }
}
