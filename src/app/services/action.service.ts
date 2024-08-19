import {Injectable} from "@angular/core";
import {ActionModel} from "../models/action.model";

@Injectable()
export class ActionService {
  private _actionList: ActionModel[] = [];
  public get actionList(): ActionModel[] {
    return this._actionList;
  }
  public addAction(action: ActionModel) {
    this._actionList.push(action);
  }
  public loadActions(actions: ActionModel[]) {
    this._actionList = actions;
  }

  public removeAction(index: number) {
    this._actionList.splice(index, 1);
  }
}
