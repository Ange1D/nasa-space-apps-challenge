import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nasa-space-apps-challenge');


  menuItems = [
    { name: 'Image Viewer', icon: 'image_search', route: '/viewer' },
    { name: 'Image Labeling', icon: 'label', route: '/labeling' },
    { name: 'About', icon: 'person', route: '/about' }
  ];

}
