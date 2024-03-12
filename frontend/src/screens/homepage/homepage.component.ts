import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent, PeopleGridComponent, SearchComponent } from 'components/src';
import { SearchResult } from '@random/models';
import { Observable } from 'rxjs';
import { NameSearchPipe } from '../../pipes/namesearch.pipe';
import { Store, StoreModule } from '@ngrx/store';
import { currentPage, selectCurrentPagePeople, selectIsLoading } from 'frontend/src/store/selectors/people';
import { loadPeople } from "../../store/actions/people"
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, PeopleGridComponent, PaginationComponent, SearchComponent, NameSearchPipe, StoreModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  searchText: string = "";

  people$: Observable<SearchResult[]>;
  isLoading$: Observable<boolean>;
  currentPage$: Observable<number>;

  constructor(private store: Store<any>) {
    this.people$ = this.store.select(selectCurrentPagePeople as any);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.currentPage$ = this.store.select(currentPage);
  }

  ngOnInit(): void {
    this.loadPeople(1);
  }

  onPageChange(page: number): void {
    this.loadPeople(page);
  }

  private loadPeople(page: number): void {
    this.store.dispatch(loadPeople({ page }));
  }

  onSearch(text: string){
    this.searchText = text;
  }

}
