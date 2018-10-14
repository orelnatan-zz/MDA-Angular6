import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Location } from '../../models/location.modal';
import { Size } from '../../models/size.modal';
import { } from 'googlemaps';

@Component({
  selector: 'google-maps',
  templateUrl: './googleMaps.component.html',
})

export class GoogleMaps implements OnInit{
  
    @ViewChild('googleMapsRef') mapElement: any;
    @Input() location: Location;
    @Input() title: string;
    @Input() zoom: number;
    @Input() size: Size;
       
    ngOnInit(){  // Initialize New Google map...
        let mapProps = {
          center: new google.maps.LatLng(this.location.latitude, this.location.longitude),
          zoom: this.zoom,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
        };
        // Add Marker...
        let googleMap: google.maps.Map = new google.maps.Map(this.mapElement.nativeElement, mapProps);
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.location.latitude, this.location.longitude),
          title: this.title,
        });
        marker.setMap(googleMap);
  }
}