import { Component } from '@angular/core';

@Component({
  selector: 'accidents-header',
  templateUrl: './accidentsHeader.component.html',
  styleUrls: ['./accidentsHeader.component.scss']
})

export class AccidentsHeader {
  
    headers = [
        { label: 'MDA', id: 1 },
        { label: 'Event Time', id: 2 },
        { label: 'Mechanisem', id: 3 },
        { label: 'Kinematic', id: 4 },
    ]
}