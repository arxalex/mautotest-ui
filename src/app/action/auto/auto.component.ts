import {Component, Input} from '@angular/core';
import {ActionModel} from "../../models/action.model";
import {ActionService} from "../../services/action.service";
import {PopupService} from "../../services/popup.service";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.scss'
})
export class AutoComponent {
  @Input() public action?: ActionModel;
  @Input() public index?: number;
  @Input() public isInList?: boolean;

  constructor(private actionService: ActionService,
              private popupService: PopupService) {
  }

  protected add(): void {
    if (this.action) {
      this.actionService.addAction(this.action);
    }
  }

  protected remove(): void {
    if (this.action && this.index !== undefined) {
      this.actionService.removeAction(this.index);
    }
  }

  protected info(): void {
    this.popupService.show(this.action!.description!, 'Description')
  }
}
