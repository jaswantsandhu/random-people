import { createSelector } from '@ngrx/store';
import { State } from '../reducers/people';

export const selectPeopleFeature = (state: { people: State }) => state.people;

export const selectCurrentPagePeople = createSelector(
  selectPeopleFeature,
  (state) => state.people.get(state.currentPage)
);

export const selectIsLoading = createSelector(
  selectPeopleFeature,
  (state) => state.isLoading
);

export const currentPage = createSelector(
  selectPeopleFeature,
  (state) => state.currentPage
);

export const selectPeopleDataForPage = (page: any) =>
  createSelector(selectPeopleFeature, (state) => state.people.get(page));

export const selectedPersonById = () =>
  createSelector(selectPeopleFeature, (state) => state.selectedPerson);
