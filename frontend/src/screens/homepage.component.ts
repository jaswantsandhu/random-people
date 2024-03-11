import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleGridComponent } from 'components/src';
import { SearchService } from "@random/services"
import { SearchResponse } from '@random/models';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, PeopleGridComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {

  people = signal<null | SearchResponse>(null);

  constructor(private _SearchService: SearchService) {

  }

  ngOnInit(): void {
    this._SearchService.get().subscribe((response) => {
      this.people.update(() => { return response })
    })
  }

}
