import { Component, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent, PeopleGridComponent } from 'components/src';
import { SearchService } from "@random/services"
import { SearchResponse } from '@random/models';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, PeopleGridComponent, PaginationComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {

  people = signal<SearchResponse["results"]>([]);
  currentPage = signal<number>(1)

  constructor(private _SearchService: SearchService) {
    effect(() => {
      this.getPeopleResults();
    })
  }

  ngOnInit(): void {
    this.getPeopleResults();
  }

  getPeopleResults() {
    this._SearchService.get(30, this.currentPage()).subscribe((response) => {
      this.people.update(() => { return response.results })
    })
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

}
