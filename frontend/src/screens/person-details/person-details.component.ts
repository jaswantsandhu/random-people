import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SearchResult } from '@random/models';
import { Store } from '@ngrx/store';
import { findPersonById } from 'frontend/src/store/actions/people';
import { selectedPersonById } from 'frontend/src/store/selectors/people';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css',
})
export class PersonDetailsComponent {
  person!: SearchResult;
  selectedPerson$: Observable<SearchResult>;

  constructor(private route: ActivatedRoute, private store: Store<any>) {
    this.selectedPerson$ = this.store.select(selectedPersonById() as any);
  }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.store.dispatch(findPersonById({ id }));
  }
}
