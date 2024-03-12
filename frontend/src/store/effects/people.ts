import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of, from } from 'rxjs';
import * as PeopleActions from '../actions/people';
import { SearchService } from '@random/services';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/people'; // Make sure this path is correct
import { selectPeopleFeature } from '../selectors/people';

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private store: Store<{ people: State }>
  ) {}

  findPersonById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.findPersonById),
      withLatestFrom(this.store.pipe(select((state) => state.people.people))),
      map(([action, peopleMap]) => {
        const allPeople = Array.from(peopleMap.values()).flat();
        const person = allPeople.find(
          (person) => person.id.value === action.id
        );

        if (person) {
          return PeopleActions.findPersonByIdSuccess({ person });
        } else {
          return PeopleActions.findPersonByIdFailure({
            error: 'Person not found',
          });
        }
      }),
      catchError((error) => of(PeopleActions.findPersonByIdFailure({ error })))
    )
  );

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.loadPeople),
      withLatestFrom(this.store.pipe(select(selectPeopleFeature))),
      mergeMap(([action, peopleFeature]) => {
        const pageData = peopleFeature.people.get(action.page);
        if (pageData) {
          return of(PeopleActions.loadPeopleNoAction());
        } else {
          return this.searchService.get(30, action.page).pipe(
            map((data) =>
              PeopleActions.loadPeopleSuccess({
                people: data.results,
                page: action.page,
              })
            ),
            catchError((error) =>
              of(PeopleActions.loadPeopleFailure({ error }))
            )
          );
        }
      })
    )
  );
}
