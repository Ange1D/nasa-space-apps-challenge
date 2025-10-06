import { Routes } from '@angular/router';
import { ImageViewerComponent } from "./image-viewer/image-viewer";
import { NotFoundComponent } from './not-found/not-found';
import { ProjectSummaryComponent } from './project-summary/project-summary'

export const routes: Routes = [
  { path: 'viewer', component: ImageViewerComponent, title: 'Image Viewer' },
  { path: 'labeling', component: ImageViewerComponent, title: 'Image Labeling' },
  { path: 'about', component: ProjectSummaryComponent, title: 'About' },

  { path: '', redirectTo: '/viewer', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];