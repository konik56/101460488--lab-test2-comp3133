import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatOptionModule],
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Filter by House</mat-label>
      <mat-select (selectionChange)="onSelectHouse($event.value)">
        <mat-option *ngFor="let house of houses" [value]="house">
          {{ house }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class CharacterFilterComponent {
  @Output() houseSelected = new EventEmitter<string>();
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onSelectHouse(house: string): void {
    this.houseSelected.emit(house);
  }
}
