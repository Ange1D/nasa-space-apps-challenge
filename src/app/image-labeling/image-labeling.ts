import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Importado
import OpenSeadragon from 'openseadragon';
import { CommonModule  } from '@angular/common';

interface Label {
  id: number;
  x: number;
  y: number;
  text: string;
  color?: string;
}

@Component({
  selector: 'app-image-labeling',
  imports: [FormsModule, CommonModule ],
  templateUrl: './image-labeling.html',
  styleUrl: './image-labeling.css'
})
export class ImageLabelingComponent{
  private osdViewer: OpenSeadragon.Viewer | null = null;
  private eventsSetup: boolean = false;
  labelsVisible: boolean = true;


  @Input()
  set viewer(v: OpenSeadragon.Viewer | null) {
      this.osdViewer = v;
      
      if (this.osdViewer && !this.eventsSetup) { 
          
          this.osdViewer.addHandler('tile-loaded', () => {
              this.osdViewer!.removeAllHandlers('tile-loaded');
              setTimeout(() => { 
                  this.setupViewerEvents();
                  this.drawLabels(); 
              }, 50); 
          });
          
          this.eventsSetup = true;
      }
      
      if (this.osdViewer && this.eventsSetup) {
          this.drawLabels(); 
      }
  }

  @Output() labelsChange = new EventEmitter<Label[]>();
  labels: Label[] = [];
  currentLabelText: string = '';
  currentLabelColor: string = '#1eff00';

   private labelOverlays: { [key: number]: HTMLElement } = {};


  setupViewerEvents() {
        if (!this.osdViewer) return;
        
        this.osdViewer.removeAllHandlers('canvas-click'); 
        this.osdViewer.addHandler('canvas-click', (event: any) => {

            if (event.quick) {
                if (!this.currentLabelText.trim()) {
                    alert('Por favor, escribe el nombre de la etiqueta antes de agregarla.');
                    return;
                }
                
                const position = this.osdViewer!.viewport.viewerElementToImageCoordinates(event.position);
                this.addLabel(position.x, position.y, this.currentLabelText, this.currentLabelColor);
            }
        });
    }

  addLabel(x: number, y: number, text: string, color: string) {
    const newLabel: Label = {
      id: Date.now(),
      x,
      y,
      text,
      color
    };
    this.labels.push(newLabel);
    this.labelsChange.emit(this.labels);
    this.drawLabels();
  }


  drawLabels() {
    if (!this.osdViewer) return;

    Object.values(this.labelOverlays).forEach(overlayEl => {
        this.osdViewer!.removeOverlay(overlayEl);
    });
    this.labelOverlays = {};

    this.labels.forEach(label => {

      const tiledImage = this.osdViewer!.world.getItemAt(0);
      if (!tiledImage) {
        console.error("No se pudo obtener la imagen.");
        return;
      }

      const imageSize = tiledImage.getContentSize();
      const imageX = (label.x / imageSize.x) * tiledImage.getBounds().width + tiledImage.getBounds().x;
      const imageY = (label.y / imageSize.y) * tiledImage.getBounds().height + tiledImage.getBounds().y;
      const pointLocation = new OpenSeadragon.Point(imageX, imageY);

      const containerEl = document.createElement('div');
      containerEl.className = 'label-container';

      const markerEl = document.createElement('div');
      markerEl.className = 'label-marker'; 
      markerEl.style.backgroundColor = label.color || '#1eff00';
      markerEl.style.width = '30px'; 
      markerEl.style.height = '30px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.opacity = '50%';

      const textEl = document.createElement('div');
      textEl.className = 'label-text'; 
      textEl.textContent = label.text;
      textEl.style.backgroundColor = 'white';
        
      containerEl.appendChild(markerEl);
      containerEl.appendChild(textEl);
      
      this.osdViewer!.addOverlay({
        element: containerEl,
        location: pointLocation,
        placement: OpenSeadragon.Placement.CENTER
      });

      this.labelOverlays[label.id] = containerEl;

    });

    setTimeout(() => this.osdViewer?.forceRedraw(), 50); 
  }

  removeLabel(id: number) {
    if (!this.osdViewer) return;

    if (this.labelOverlays[id]) {
        this.osdViewer.removeOverlay(this.labelOverlays[id]);
        delete this.labelOverlays[id];
    }

    this.labels = this.labels.filter(label => label.id !== id);
    this.labelsChange.emit(this.labels);
  }


  toggleLabels() {
  this.labelsVisible = !this.labelsVisible;

  if (this.labelsVisible) {
    this.drawLabels();
  } else {
    Object.values(this.labelOverlays).forEach(overlayEl => {
      this.osdViewer!.removeOverlay(overlayEl);
    });
    this.labelOverlays = {};
  }
}


}
