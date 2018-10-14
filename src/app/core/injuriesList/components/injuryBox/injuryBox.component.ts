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
        switch(severity){
            case 'high':
                return 'red';
            break;
            case 'medium':
                return 'orange';
            break;
            case 'low':
                return 'yellow';
            break;
        }
    }
}
