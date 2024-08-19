import {ActionModel} from "../models/action.model";
import {ActionType} from "../models/action-type.enum";
import {TypeEnum} from "../models/type.enum";

export class ActionMockRepositoryService {
  public static get autoActions(): ActionModel[] {
    return [
      {
        id: 1,
        type: ActionType.AUTO,
        name: 'Open page',
        description: "Open page. Paste link in Page arg",
        internalName: 'openPage',
        args: [
          {
            name: 'Page',
            type: TypeEnum.STRING
          }
        ]
      }, {
        id: 2,
        type: ActionType.AUTO,
        name: 'Login',
        description: "Paste login and password in args",
        internalName: 'login',
        args: [
          {
            name: 'Login',
            type: TypeEnum.STRING
          },
          {
            name: 'Password',
            type: TypeEnum.STRING
          },
        ]
      },
      {
        id: 3,
        type: ActionType.AUTO,
        name: 'Check on screen',
        description: "Paste text to search on screen into Text arg",
        internalName: 'checkOnScreen',
        args: [
          {
            name: 'Text',
            type: TypeEnum.STRING
          }
        ]
      },
      {
        id: 4,
        type: ActionType.AUTO,
        name: 'Click on button',
        description: "Paste button text click in Button arg",
        internalName: 'clickOnButton',
        args: [
          {
            name: 'Button',
            type: TypeEnum.STRING
          }
        ]
      },
      {
        id: 5,
        type: ActionType.AUTO,
        name: 'Logout',
        internalName: 'logout',
        args: []
      },
    ]
  }
}
