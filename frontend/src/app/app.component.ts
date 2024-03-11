import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from "@random/components"

@Component({
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
