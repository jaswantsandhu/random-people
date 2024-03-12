import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() pages: number = 0;
  @Input() current: number | null = 0;
  @Output() change: EventEmitter<number> = new EventEmitter();

  get totalPages() {
    return Array.from({ length: this.pages }, (_, index) => {
      return ++index;
    });
  }

  onChange(page: number | string) {
    if (this.current) {
      if (page === 'next') {
        this.change.emit(++this.current);
      } else if (page === 'prev') {
        this.change.emit(--this.current);
      } else {
        this.change.emit(page as unknown as number);
      }
    }
  }
}
