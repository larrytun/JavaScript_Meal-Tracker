import { Component } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container body">
    <div class="jumbotron">
      <h1>My Daily Food Blog</h1>
    </div>
    <entry-list
      [childEntryList]="masterEntryList"
      (clickSender)="showDetails($event)"
      ></entry-list>
    <new-entry
      (newEntrySender)="addEntry($event)"
    ></new-entry>
    <edit-entry id="editEntry"
      [childSelectedEntry]="selectedEntry"
      (doneClickedSender)="finishedEditing()"
    ></edit-entry>
  </div>

  `
})

export class AppComponent {
  public masterEntryList: Entry[] = [
    new Entry("07/01/2016","Carrots", 50, "I had a few baby carrots with ranch"),
    new Entry("07/04/2016","Pizza", 350, "I had one big slice of pizza"),
    new Entry("07/15/2016","Hot Dogs", 400, "I ate 3 kosher hot dogs"),
    new Entry("07/27/2016","Chicken Salad", 320, "I ate half a chicken salad"),
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
