import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageViewerComponent } from "./image-viewer/image-viewer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageViewerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nasa-space-apps-challenge');
}
