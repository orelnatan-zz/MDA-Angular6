import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert-box',
  templateUrl: './alertBox.component.html',
  styleUrls: ['./alertBox.component.scss']
})

export class AlertBox {
  
    @Input() backgroundColor: string;
    @Input() fontColor: string;
    @Input() borderColor: string;
    @Input() title: string;
    @Input() note: string;

    getBoxStyle(): object{
        return {
            'color': this.fontColor,
            'background-color': this.backgroundColor,
            'border-color': this.borderColor,
        }
    }
}