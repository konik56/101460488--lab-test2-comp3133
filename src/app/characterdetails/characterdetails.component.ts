
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
interface CharacterDetails {
  name: string;
  species: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  actor: string;
  image: string;
}

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <div *ngIf="character" class="character-details">
      <div class="character-image">
        <img [src]="character?.image" alt="{{ character?.name }}" />
      </div>
      <div class="character-info">
        <h3>{{ character?.name }}</h3>
        <p><strong>Species:</strong> {{ character?.species }}</p>
        <p><strong>House:</strong> {{ character?.house }}</p>
        <p><strong>Wizard:</strong> {{ character?.wizard ? 'Yes' : 'No' }}</p>
        <p><strong>Ancestry:</strong> {{ character?.ancestry }}</p>
        <p>
          <strong>Wand:</strong> {{ character?.wand?.wood }} wood,
          {{ character?.wand?.core }} core, {{ character?.wand?.length }} cm
        </p>
        <p><strong>Actor:</strong> {{ character?.actor }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .character-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        max-width: 600px;
        margin: auto;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .character-image img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 20px;
      }

      .character-info {
        text-align: left;
        width: 100%;
      }

      .character-info h3 {
        font-size: 1.8em;
        color: #333;
        margin-bottom: 10px;
      }

      .character-info p {
        font-size: 1.1em;
        color: #555;
        margin-bottom: 8px;
      }

      .character-info p strong {
        color: #333;
      }
    `,
  ],
})
export class CharacterDetailsComponent {
  @Input() character: CharacterDetails | null = null;
}
