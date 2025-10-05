import { AfterViewInit, Component, ElementRef } from '@angular/core';
import OpenSeadragon from 'openseadragon';

@Component({
  selector: 'app-image-viewer',
  imports: [],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.css'
})
export class ImageViewerComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      OpenSeadragon({
        id: "openseadragon-viewer",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: 'assets/zoom_images/Andromeda-galaxy.dzi',
        maxZoomLevel: 100.0,
        minZoomLevel: 0.5,
        defaultZoomLevel: 0.8
      },);
    }, 10);
  }
}
