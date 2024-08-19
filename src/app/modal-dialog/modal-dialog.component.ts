import {Component, Input} from '@angular/core';
import {PopupService} from "../services/popup.service";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent {
  public get header(): string {
    return this.popupService.header;
  }

  public get body(): string {
    return this.popupService.body;
  }

  constructor(private popupService: PopupService) {
  }

  protected hide(): void {
    this.popupService.close();
  }
}
