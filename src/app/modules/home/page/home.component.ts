import { Component } from '@angular/core';
import { Property, RealEstate } from 'types/real-estate';
import DataTransfer from '../../../../assets/data/real-estate.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  searchQuery: string = '';
  realEstateData: RealEstate = DataTransfer;
  inputFocused: boolean = false;

  get filteredProperties(): Property[] {
    if (this.searchQuery.length === 0 && this.inputFocused) {
      return this.realEstateData.property;
    }
    return this.realEstateData.property.filter(
      (item) =>
        item.address.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onFocus() {
    this.inputFocused = true;
  }

  onBlur() {
    if (this.searchQuery.length === 0) {
      this.inputFocused = false;
    }
  }
}
