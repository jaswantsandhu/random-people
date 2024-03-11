import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  emitSearchText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTextChange.emit(target.value);
  }

}
