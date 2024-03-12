import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResponse } from "@random/models"
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-people-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './people-grid.component.html',
  styleUrl: './people-grid.component.css',
})
export class PeopleGridComponent {

  @Input() people: SearchResponse["results"]  = [];

}
