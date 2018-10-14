import { Component, Input } from '@angular/core';
import { Injury } from '../../models/injury.modal';

@Component({
  selector: 'injuries-list',
  templateUrl: './injuriesList.component.html',
  styleUrls: ['./injuriesList.component.scss']
})

export class InjuriesList {
  
    @Input() injuries: Array<Injury>;
    
}
