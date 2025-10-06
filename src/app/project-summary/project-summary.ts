import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-summary',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './project-summary.html',
  styleUrl: './project-summary.css'
})
export class ProjectSummaryComponent {

  hackathonInfo = {
    name: '2025 NASA Space Apps Challenge',
    date: 'October 4-5',
    event: 'Virtual Event'
  };

  myInfo = {
    name: 'Angel',
    githubUser: 'Ange1D',
    githubUrl: 'https://github.com/Ange1D',
    imgUrl: 'https://avatars.githubusercontent.com/u/47231898'
  };


  challengeInfo = {
    name: 'Embiggen Your Eyes!',
    description: 'While your cell phone screen can display about three million pixels of information and your eye can receive more than ten million pixels, NASA images from space are even bigger! NASA’s space missions continue to push the boundaries of what is technologically possible, providing high-resolution images and videos of Earth, other planets, and space with billions or even trillions of pixels. Your challenge is to create a platform that allows users to zoom in and out on these massive image datasets, label known features, and discover new patterns.',
    stack: [{name:'Angular'}, {name:'Angular Material'}]
  };

  resources ={
    images: [{name:'Andromeda galaxy', size:'203MB', imageUrl:'https://assets.science.nasa.gov/content/dam/science/missions/hubble/galaxies/andromeda/Hubble_M31Mosaic_2025_42208x9870_STScI-01JGY8MZB6RAYKZ1V4CHGN37Q6.jpg'},
       {name:'Carina Nebula', size:'219MB', imageUrl:'https://cdn.eso.org/images/original/eso1208a.tif'}]
  }

}
