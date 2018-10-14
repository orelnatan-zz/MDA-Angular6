import { Component, Input } from '@angular/core';
import { Location } from '../../models/location.modal';

@Component({
  selector: 'location-view',
  templateUrl: './locationView.component.html',
  styleUrls: ['./locationView.component.scss']
})

export class LocationView {
  
    @Input() location: Location;
}
