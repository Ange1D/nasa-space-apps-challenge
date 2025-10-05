import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // La barra superior
import { MatSidenavModule } from '@angular/material/sidenav'; // El menú deslizante
import { MatIconModule } from '@angular/material/icon'; // Íconos
import { MatButtonModule } from '@angular/material/button'; // Botones
import { MatListModule } from '@angular/material/list'; // Para los ítems del menú


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
