import { Component, Input } from '@angular/core';
import { Injury } from '../../../../models/injury.modal';

@Component({
  selector: 'injury-box',
  templateUrl: './injuryBox.component.html',
  styleUrls: ['./injuryBox.component.scss']
})

export class InjuryBox {

    @Input() injury: Injury;


    getBorderColorBySeverity(severity: string): string{
        let color: string;
        switch(severity){
            case 'high':
              color = 'red';
            break;
            case 'medium':
                color = 'orange';
            break;
            case 'low':
                color = 'yellow';
            break;
        }
        return color;
    }
}
