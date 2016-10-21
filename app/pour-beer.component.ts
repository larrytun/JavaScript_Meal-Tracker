import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'pour-beer',
  template:`
    <button (click)="pourButtonClicked(childEntry)"
    id="pourButton"
    class="btn btn-danger"
    >Pour Beer</button>
    <button (click)="swapEntry(childEntry)"
    id="swapButton"
    class="btn btn-danger"
    >Swap Entry</button>
  `
})

export class PourBeerComponent {
  @Input() childEntry: Entry;
  @Output() pourBeerSender = new EventEmitter();
  pourButtonClicked(childEntry) {
    childEntry.pintsLeft -=1;
  }
  swapEntry(childEntry) {
    childEntry.pintsLeft = 124;
  }
}
