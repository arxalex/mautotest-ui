import {Component, Input} from '@angular/core';
import {ActionModel} from "../../models/action.model";
import {ActionService} from "../../services/action.service";

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrl: './manual.component.scss'
})
export class ManualComponent {
  @Input() public action?: ActionModel;
  @Input() public index?: number;

  constructor(private actionService: ActionService) {
  }

  protected remove(): void {
    if (this.action && this.index !== undefined) {
      this.actionService.removeAction(this.index);
    }
  }
}
