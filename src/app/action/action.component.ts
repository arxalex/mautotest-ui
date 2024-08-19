import {Component, Input} from '@angular/core';
import {ActionModel} from "../models/action.model";
import {ActionType} from "../models/action-type.enum";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html'
})
export class ActionComponent {
  @Input() public action?: ActionModel;
  @Input() public isInList?: boolean;
  @Input() public index?: number;

  protected readonly ActionType = ActionType;
}
