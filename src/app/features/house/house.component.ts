import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data/real-estate.json';
import { Property } from '../../../types/real-estate';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
})
export class HouseComponent implements OnInit {
  houseId: string | null = null;
  houseData: Property | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.houseId = params.get('id');
      if (this.houseId) {
        this.houseData = data.property.find(
          (property) => property.id === this.houseId
        );
      }
    });
  }
}
