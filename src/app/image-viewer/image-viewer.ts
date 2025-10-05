import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import OpenSeadragon from 'openseadragon';
import { ImageLabelingComponent } from "../image-labeling/image-labeling";
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-viewer',
  imports: [ImageLabelingComponent],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.css'
})
export class ImageViewerComponent implements AfterViewInit {

  private router = inject(Router);

  @ViewChild('viewer') viewerElement!: ElementRef;
  viewer: OpenSeadragon.Viewer | null = null;

  constructor(private el: ElementRef) {}

  get isLabeling(): boolean {
    return this.router.url.includes('labeling');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewer = OpenSeadragon({
        id: "openseadragon-viewer",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        gestureSettingsMouse: {
          clickToZoom: false,
        },
        tileSources: 'assets/zoom_images/Andromeda-galaxy.dzi',
        maxZoomLevel: 100.0,
        minZoomLevel: 0.5,
        defaultZoomLevel: 0.8
      },);
    }, 10);
  }
}
