import { Route } from '@angular/router';
import { HomepageComponent } from '../screens/homepage/homepage.component';
import { PersonDetailsComponent } from '../screens/person-details/person-details.component';
export const appRoutes: Route[] = [
    {
        path : "",
        component: HomepageComponent
    },
    {
        path : "people/:id",
        component: PersonDetailsComponent
    }
];
