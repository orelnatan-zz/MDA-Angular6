import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-alert',
  templateUrl: './errorAlert.component.html',
  styleUrls: ['./errorAlert.component.scss']
})

export class ErrorAlert {

    @Input() title: string;
    @Input() note: string;

}
