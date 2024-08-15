import { Component } from '@angular/core';

import data from '../../../../assets/data/real-estate.json';
import { RealEstate } from '../../../../types/real-estate';

@Component({
  selector: 'app-realEstate',
  templateUrl: './realEstate.component.html',
})
export class RealEstateComponent {
  realEstateData: RealEstate = data;
}
