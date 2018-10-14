import { Component } from '@angular/core';

@Component({
  selector: 'error-alert',
  templateUrl: './errorAlert.component.html',
})

export class ErrorAlert {
  
    isShown: boolean;

    showAlert(): void {
        this.isShown = true;
    }

    hideAlert(): void {
        this.isShown = false;
    }

    print(){
        console.log('ggdf');
    }
}