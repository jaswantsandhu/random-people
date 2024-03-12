import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NameSearchPipe } from '../pipes/namesearch.pipe';
import { provideState, provideStore } from '@ngrx/store';

import { peopleReducer } from '../store/reducers/people';
import { provideEffects } from '@ngrx/effects';
import { PeopleEffects } from "../store/effects/people"

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    NameSearchPipe,
    provideStore(),
    provideState({ name: 'people', reducer: peopleReducer }),
    provideEffects(PeopleEffects),
  ],
};
