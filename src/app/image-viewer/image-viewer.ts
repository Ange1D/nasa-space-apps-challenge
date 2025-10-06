import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import OpenSeadragon from 'openseadragon';
import { ImageLabelingComponent } from "../image-labeling/image-labeling";
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-image-viewer',
  imports: [ImageLabelingComponent, MatSelectModule, MatFormFieldModule, FormsModule, MatInputModule, MatExpansionModule],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.css'
})
export class ImageViewerComponent implements AfterViewInit {

  imageFiles: string[] = [
    'Andromeda-galaxy.dzi',
    'carina-nebula.dzi',
  ];

  selectedImage: string = this.imageFiles[0];

  private router = inject(Router);

  @ViewChild('viewer') viewerElement!: ElementRef;
  viewer: OpenSeadragon.Viewer | null = null;

  constructor(private el: ElementRef) {}

  get isLabeling(): boolean {
    return this.router.url.includes('labeling');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeOpenSeadragon(this.selectedImage);
    }, 10);
  }

  initializeOpenSeadragon(filename: string): void {
    const tileSourcePath = `assets/zoom_images/${filename}`;

    if (!this.viewer) {
      this.viewer = OpenSeadragon({
        id: "openseadragon-viewer",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        gestureSettingsMouse: {
          clickToZoom: false,
        },
        tileSources: tileSourcePath,
        maxZoomLevel: 100.0,
        minZoomLevel: 0.5,
        defaultZoomLevel: 0.8
      });
    } else {
      this.viewer.open(tileSourcePath);
    }
  }

  onImageChange(newImageFilename: string): void {
    this.selectedImage = newImageFilename;
    this.initializeOpenSeadragon(newImageFilename);
  }
}
