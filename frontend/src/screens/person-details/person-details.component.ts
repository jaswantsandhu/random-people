import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SearchResult } from '@random/models';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css',
})
export class PersonDetailsComponent {

  person!: SearchResult;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras.state) {
      this.person = currentNavigation.extras.state['person'];
    } else {
      this.router.navigate(["/"]);
    }
  }
}
