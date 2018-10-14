import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Accident } from '../../../../models/accident.model';

@Component({
  selector: 'accident-row',
  templateUrl: './accidentRow.component.html',
  styleUrls: ['./accidentRow.component.scss']
})

export class AccidentRow {
  
    @Input() accident: Accident;
    @Output() rowClicked = new EventEmitter();
}