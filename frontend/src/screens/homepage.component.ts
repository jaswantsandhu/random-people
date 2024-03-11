import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleGridComponent } from 'components/src';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, PeopleGridComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
