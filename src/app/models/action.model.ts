import {ActionType} from "./action-type.enum";
import {ActionArgModel} from "./action-arg.model";

export class ActionModel {
  public id?: number;
  public name?: string;
  public type?: ActionType;
  public args: ActionArgModel[] = [];
  public description?: string;
  public internalName?: string;
}
