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
    new Entry("Hop Slice Session IPA", "Deschutes", 5, 4.5),
    new Entry("Mosaic Fresh Hop Fresh Squeezed", "Deschutes", 6, 5.8),
    new Entry("Sage Flight IPA", "Deschutes", 6, 9),
    new Entry("Call Me! A Blondie Ale", "Widmer Brothers", 4, 4.3),
    new Entry("Monster Mash Imperial Porter", "Lompoc", 6, 8),
    new Entry("IPA", "Backpedal Brewing", 5.5, 5),
    new Entry("Black Widow Porter", "McMenamins", 5.75, 6.7),
    new Entry("Dream Girl Summer Ale", "McMenamins", 5, 4.1),
    new Entry("Chronically ILL", "Great Notion Brewing", 7, 10),
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
