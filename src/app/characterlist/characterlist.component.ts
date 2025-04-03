import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';

interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
}

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="character-list">
      <div *ngFor="let character of characters" class="character-item">
        <mat-card (click)="onCharacterSelect(character)" class="character-card">
          <img
            mat-card-image
            [src]="
              character.image ? character.image : 'assets/default-icon.png'
            "
            alt="{{ character.name }}"
            class="character-image"
          />
          <mat-card-title class="character-name">{{
            character.name
          }}</mat-card-title>
          <mat-card-subtitle class="character-house">{{
            character.house
          }}</mat-card-subtitle>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      .character-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
      }

      .character-item {
        width: 180px;
        text-align: center;
      }

      .character-card {
        width: 100%;
        cursor: pointer;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
        border-radius: 10px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      }

      .character-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .character-image {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: 10px;
        margin-bottom: 15px;
      }

      .character-name {
        font-size: 1.1em;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
      }

      .character-house {
        font-size: 0.9em;
        color: #555;
        margin-bottom: 10px;
      }

      .character-card mat-card-title,
      .character-card mat-card-subtitle {
        text-align: center;
      }
    `,
  ],
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
  @Output() characterSelected = new EventEmitter<Character>(); 

  onCharacterSelect(character: Character): void {
    this.characterSelected.emit(character); 
  }
}
