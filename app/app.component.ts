import { Component } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container body">
    <div class="jumbotron">
      <h1>Food Blog</h1>
    </div>
    <new-entry
      (newEntrySender)="addEntry($event)"
    ></new-entry>
    <edit-entry
      [childSelectedEntry]="selectedEntry"
      (doneClickedSender)="finishedEditing()"
    ></edit-entry>
    <entry-list
      [childEntryList]="masterEntryList"
      (clickSender)="showDetails($event)"
      ></entry-list>
  </div>

  `
})

export class AppComponent {
  public masterEntryList: Entry[] = [
    new Entry("Pizza", 350, "I had one big slice of pizza"),
    new Entry("Hot Dogs", 400, "I ate 3 kosher hot dogs"),
    new Entry("Chicken Salad", 320, "I ate half a chicken salad"),
  ];
  selectedEntry: Entry = null;
  showDetails(clickedEntry: Entry) {
    this.selectedEntry = clickedEntry;
  }
  finishedEditing() {
    this.selectedEntry = null;
  }
  addEntry(newEntryFromChild: Entry) {
    this.masterEntryList.push(newEntryFromChild);
  }
}
