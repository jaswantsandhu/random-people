import { createAction, props } from '@ngrx/store';
import { SearchResult } from '@random/models';

export const loadPeople = createAction(
  '[People Page] Load People',
  props<{ page: number }>()
);
export const loadPeopleSuccess = createAction(
  '[People API] People Loaded Success',
  props<{ people: SearchResult[]; page: number }>()
);
export const loadPeopleFailure = createAction(
  '[People API] People Loaded Failure',
  props<{ error: any }>()
);
export const loadPeopleNoAction = createAction('[People API] No Action');

export const findPersonById = createAction(
  '[People] Find Person By ID',
  props<{ id: string }>()
);

export const findPersonByIdSuccess = createAction(
  '[People] Find Person By ID Success',
  props<{ person: SearchResult }>()
);

export const findPersonByIdFailure = createAction(
  '[People] Find Person By ID Failure',
  props<{ error: string }>()
);
