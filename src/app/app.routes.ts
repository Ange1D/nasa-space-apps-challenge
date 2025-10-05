import { Routes } from '@angular/router';
import { ImageViewerComponent } from "./image-viewer/image-viewer";

export const routes: Routes = [
  { path: 'viewer', component: ImageViewerComponent, title: 'Image Viewer' },
  { path: 'labeling', component: ImageViewerComponent, title: 'Image Labeling' },
  { path: 'about', component: ImageViewerComponent, title: 'About' },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Ruta 404 (Siempre al final)
  { path: '**', component: ImageViewerComponent }
];