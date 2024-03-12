import { createAction, props } from '@ngrx/store';
import { SearchResponse, SearchResult } from '@random/models';

export const loadPeople = createAction('[People Page] Load People', props<{ page: number }>());
export const loadPeopleSuccess = createAction('[People API] People Loaded Success', props<{ people: SearchResult[], page: number }>());
export const loadPeopleFailure = createAction('[People API] People Loaded Failure', props<{ error: any }>());
export const loadPeopleNoAction = createAction('[People API] No Action');

