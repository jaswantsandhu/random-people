import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResponse } from "@random/models"

@Component({
  selector: 'lib-people-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-grid.component.html',
  styleUrl: './people-grid.component.css',
})
export class PeopleGridComponent {

  @Input() people: null | SearchResponse = null;

}
