import {Component, Input} from '@angular/core';
import {ActionArgModel} from '../../../models/action-arg.model';

@Component({
  selector: 'app-action-arg',
  templateUrl: './action-arg.component.html',
  styleUrl: './action-arg.component.scss'
})
export class ActionArgComponent {
  @Input() public arg?: ActionArgModel;

}
