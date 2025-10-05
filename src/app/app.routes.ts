import { Routes } from '@angular/router';
import { ImageViewerComponent } from "./image-viewer/image-viewer";
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: 'viewer', component: ImageViewerComponent, title: 'Image Viewer' },
  { path: 'labeling', component: ImageViewerComponent, title: 'Image Labeling' },
  { path: 'about', component: ImageViewerComponent, title: 'About' },

  { path: '', redirectTo: '/viewer', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];