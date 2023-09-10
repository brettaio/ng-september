import { Component, ElementRef, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-index-threejs',
  templateUrl: './index-threejs.component.html',
  styleUrls: ['./index-threejs.component.scss'],
})
export class IndexThreejsComponent implements OnInit {
  private scene: THREE.Scene = new THREE.Scene(); // Initialize the scene

  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Initialize Three.js camera and renderer
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();

    // Set up camera position and renderer size
    this.camera.position.z = 5;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer to the DOM
    this.el.nativeElement.appendChild(this.renderer.domElement);

    // Add any objects or animations you need to the scene
    // For scroll animations, you'll need to add your scroll event listeners here
    // and update your scene accordingly based on scroll position.
  }

  // Add your Three.js animation logic here
  animate() {
    // Update animations here
    this.renderer.render(this.scene, this.camera);

    // Request animation frame for smooth animations
    requestAnimationFrame(() => this.animate());
  }
}
