
import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import { CharacterListComponent } from './characterlist/characterlist.component';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';
import { CharacterDetailsComponent } from './characterdetails/characterdetails.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CharacterListComponent,
    CharacterFilterComponent,
    CharacterDetailsComponent,
    CommonModule,
  ],
  template: `
    <div>
      <app-characterfilter
        (houseSelected)="onHouseSelected($event)"
      ></app-characterfilter>
      <app-characterlist
        [characters]="filteredCharacters"
        (characterSelected)="onCharacterSelected($event)"
      ></app-characterlist>
      <app-characterdetails
        [character]="selectedCharacter"
      ></app-characterdetails>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  filteredCharacters: any[] = [];
  selectedCharacter: any = null;

  constructor(private characterService: CharacterService) {}

  onHouseSelected(house: string): void {
    this.characterService
      .getCharactersByHouse(house)
      .subscribe((characters) => {
        this.filteredCharacters = characters;
      });
  }

  onCharacterSelected(character: any): void {
    this.selectedCharacter = character;
  }
}
