import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'edit-entry',
  template: `
    <div class="col-xs-6">
      <div class="well">
        <div class="edit-entry">
          <div *ngIf="childSelectedEntry">
            <h1>Edit Entry</h1>
            <div class="form-group">
              <label>Enter Entry Food:</label><br>
              <input [(ngModel)]="childSelectedEntry.food">
            </div>
            <div class="form-group">
              <label>Enter Calories:</label><br>
              <input [(ngModel)]="childSelectedEntry.calories">
            </div>
            <div class="form-group">
              <label>Enter Description:</label><br>
              <input [(ngModel)]="childSelectedEntry.description">
              <button (click)="doneClicked()"
              class="btn btn-danger">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class EditEntryComponent {
  @Input() childSelectedEntry: Entry;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
