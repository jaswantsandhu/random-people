import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent, PeopleGridComponent } from 'components/src';
import { SearchService } from "@random/services"
import { SearchResponse } from '@random/models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, PeopleGridComponent, PaginationComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  people: Map<number, SearchResponse["results"]> = new Map();
  currentPage: number = 1;
  isLoadingResults: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getPeopleResults();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getPeopleResults(): void {
    this.isLoadingResults = true;
    this.searchService.get(30, this.currentPage)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.people.set(this.currentPage, response.results);
          this.isLoadingResults = false;
        },
        error: () => {
          this.isLoadingResults = false;
        }
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (!this.people.has(this.currentPage)) {
      this.getPeopleResults();
    }
  }

  get peopleOnCurrentPage() {
    return this.people.get(this.currentPage);
  }
}
