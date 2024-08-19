import {Component} from '@angular/core';
import {ActionService} from "../services/action.service";
import {ActionModel} from "../models/action.model";
import {CdkDragDrop, CdkDragEnd, CdkDragStart, moveItemInArray} from "@angular/cdk/drag-drop";
import {ActionType} from "../models/action-type.enum";

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html'
})
export class ActionListComponent {
  isDragging = false;

  constructor(private actionService: ActionService) {
  }

  protected get actionList(): ActionModel[] {
    return this.actionService.actionList;
  }

  protected drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.actionList, event.previousIndex, event.currentIndex);
  }

  protected dragStarted(event: CdkDragStart): void {
    this.isDragging = true;
  }

  protected dragEnded(event: CdkDragEnd): void {
    this.isDragging = false;
  }

  protected addManualAction(): void {
    const manualAction: ActionModel = {
      id: 0,
      name: "Manual Action",
      type: ActionType.MANUAL,
      internalName: 'manualAction',
      args: []
    }
    this.actionService.addAction(manualAction);
  }
}
