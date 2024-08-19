import {TestCaseModel} from "../models/test-case.model";
import {ActionService} from "./action.service";
import {Injectable} from "@angular/core";
import {ActionMockRepositoryService} from "../mock/action-mock-repository.service";
import {ActionType} from "../models/action-type.enum";
import {TypeEnum} from "../models/type.enum";
import {ActionModel} from "../models/action.model";

@Injectable()
export class TestCaseService {
  private _testCase: TestCaseModel = {
    name: "TestCase #",
    actions: []
  };
  private readonly testCaseTemplate = `it('{{ testCaseName }}', async () => {
  {{ actions }}
});
`.trim();

  private readonly actionTemplate = `await {{ actionName }}({{ args }});`;

  public get testCase(): TestCaseModel {
    return this._testCase;
  }

  constructor(private actionService: ActionService) {
  }

  public loadTestCase(testCase: TestCaseModel): void {
    this._testCase = testCase;
    this.actionService.loadActions(this.testCase.actions!);
  }

  public compile(testCase: TestCaseModel): string {
    const actions = testCase.actions?.map(action => {
      let args: string;
      if (action.type === ActionType.AUTO) {
        args = action.args.map(arg => {
          arg.value = arg.value ? arg.value : '';
          return arg.type === TypeEnum.STRING ? `"${arg.value}"` : arg.value;
        }).join(', ');
      } else {
        args = `"${action.name}"`;
      }
      return this.actionTemplate
        .replace('{{ actionName }}', action.internalName!)
        .replace('{{ args }}', args);
    }).join('\n  ') || '';

    return this.testCaseTemplate
      .replace('{{ testCaseName }}', testCase.name!)
      .replace('{{ actions }}', actions);
  }

  public decompile(jsCode: string): TestCaseModel {
    const testCase = new TestCaseModel();

    const namePattern = new RegExp(
      this.testCaseTemplate
        .replace(/[\.\*\+\?\^\$\(\)\[\]\{\}\\\|\-\+]/g, '\\$&')
        .replace('\\{\\{ testCaseName \\}\\}', "(.*?)")
        .replace('  \\{\\{ actions \\}\\}', '.*')
      , 's'
    );
    const nameMatch = jsCode.match(namePattern);
    if (nameMatch) {
      testCase.name = nameMatch[1];
    }

    const actionPattern = new RegExp(
      this.actionTemplate
        .replace(/[\.\*\+\?\^\$\(\)\[\]\{\}\\\|\-\+]/g, '\\$&')
        .replace('\\{\\{ actionName \\}\\}', "(\\w+)")
        .replace('\\{\\{ args \\}\\}', "(.*?)")
      , 'g'
    );
    const actionMatches = [...jsCode.matchAll(actionPattern)];
    testCase.actions = actionMatches.map(match => {
      let action: ActionModel;
      if(match[1] === 'manualAction'){
        action = {
          id: 0,
          internalName: match[1],
          name: match[2].replace(/\\?"|"/g, ''),
          type: ActionType.MANUAL,
          args: []
        }
      } else {
        action = ActionMockRepositoryService.autoActions.find(a => a.internalName === match[1])!;

        if (match[2] && action.args && action.args.length && match[2].length) {
          const args = match[2].split(', ');
          for (let i = 0; i < action.args.length; i++) {
            console.log(args[i]);
            action.args[i].value = action.args[i].type === TypeEnum.STRING ? args[i].replace(/\\?"|"/g, '') : args[i];
          }
        }
      }
      return action;
    });

    return testCase;
  }
}

