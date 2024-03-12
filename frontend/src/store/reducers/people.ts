import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people';
import { SearchResult } from '@random/models'; // Ensure this import matches your actual model path

export interface State {
  people: Map<number, SearchResult[]>;
  currentPage: number;
  isLoading: boolean;
}

export const initialState: State = {
  people: new Map(),
  currentPage: 1,
  isLoading: false,
};

export const peopleReducer = createReducer(
  initialState,
  on(PeopleActions.loadPeople, (state, { page }) => ({
    ...state,
    isLoading: true,
    currentPage: page,
  })),
  on(PeopleActions.loadPeopleNoAction, (state) => {
    console.log("no action")
    return { ...state, isLoading: false };
  }),
  on(PeopleActions.loadPeopleSuccess, (state, { people, page }) => {
    const updatedPeople = new Map(state.people);
    updatedPeople.set(page, people);
    return { ...state, isLoading: false, people: updatedPeople };
  }),
  on(PeopleActions.loadPeopleFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);
