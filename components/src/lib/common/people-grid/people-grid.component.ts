import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-people-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-grid.component.html',
  styleUrl: './people-grid.component.css',
})
export class PeopleGridComponent {}
