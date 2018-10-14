import { Component, Input } from '@angular/core';

@Component({
  selector: 'sub-header',
  templateUrl: './subHeader.component.html',
  styleUrls: ['./subHeader.component.scss']
})

export class SubHeader {
  
    @Input() subHeader: string = '';
}