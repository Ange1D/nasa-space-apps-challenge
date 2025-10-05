import { AfterViewInit, Component, ElementRef } from '@angular/core';
import OpenSeadragon from 'openseadragon';

@Component({
  selector: 'app-image-viewer',
  imports: [],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.css'
})
export class ImageViewer implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      OpenSeadragon({
        id: "openseadragon-viewer",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi',
      });
    }, 10);
  }
}
