import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;
  private filter: string;

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }
}
