import {Component, Input} from '@angular/core';
import {ActionModel} from "../models/action.model";

@Component({
  selector: 'app-auto-actions-list',
  templateUrl: './auto-actions-list.component.html'
})
export class AutoActionsListComponent {
  @Input() actions?: ActionModel[];
}
