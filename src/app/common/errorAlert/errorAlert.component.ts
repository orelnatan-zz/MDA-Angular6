import { Component } from '@angular/core';

@Component({
  selector: 'error-alert',
  templateUrl: './errorAlert.component.html',
})

export class ErrorAlert {
  
    isShown: boolean;

    showAlert() {
        this.isShown = true;
    }

    hideAlert() {
        this.isShown = false;
    }
}