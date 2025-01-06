import { Component } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeartQuestion = false;
  showMainQuestion = true;
  showLoveQuestion = false;
  showMessage = false;
  messageText = '';
  showHamburgerMessage = false;
videonour:boolean=false;
  videofedi:boolean=false;
  // Sound setup
  wrongSound = new Howl({ src: ['assets/laughing.mp3'] });

  // Main question response
  onAnswer(answer: string): void {
    if (answer === 'fedi') {
      this.wrongSound.play();
      this.showMessage = true;
      this.videofedi=true;
      this.videonour=false;

    } else if (answer === 'nour') {
      this.showMessage = true;
      this.videonour=true;
      this.videofedi=false;
      this.messageText = 'The queen never loses!';
    }
  }

  // Heart button interaction
  toggleHeartQuestion(): void {
    this.showHeartQuestion = true;
    this.showMainQuestion = false;
  }

  // Love question response
  moveButton(event: MouseEvent): void {
    const button = document.getElementById('nooButton');
    if (button) {
      const rect = button.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      if (Math.abs(offsetX) < 50 && Math.abs(offsetY) < 50) {
        button.style.left = `${Math.random() * 90}vw`;
        button.style.top = `${Math.random() * 90}vh`;
      }
    }
  }

  // Hamburger purchase message
  buyHamburger(): void {
    this.showHamburgerMessage = true;
    this.showMessage = false;
    this.messageText = '';
  }

  reset(): void {
    this.showLoveQuestion = false;
    this.showHeartQuestion = false;
    this.showMainQuestion = true;
    this.showHamburgerMessage = false;
  }
  // Initial position at the center of the screen
  position = {
    x: window.innerWidth / 2 - 50,
    y: window.innerHeight / 2 - 20
  };

  repositionButton() {
    // Generate new random coordinates within the window bounds
    this.position.x = Math.random() * (window.innerWidth - 100); // Avoid overflow
    this.position.y = Math.random() * (window.innerHeight - 50);
  }

}
