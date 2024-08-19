import {Component} from '@angular/core';
import {ActionMockRepositoryService} from "./mock/action-mock-repository.service";
import {ActionModel} from "./models/action.model";
import {TestCaseModel} from "./models/test-case.model";
import {TestCaseMockRepositoryService} from "./mock/test-case-mock-repository.service";
import {TestCaseService} from "./services/test-case.service";
import {PopupService} from "./services/popup.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected showSelectFile: boolean = false;

  public get testCase(): TestCaseModel {
    return this.testCaseService.testCase;
  }

  constructor(private testCaseService: TestCaseService,
              private popupService: PopupService) {
    this.testCaseService.loadTestCase(TestCaseMockRepositoryService.testCase);
  }

  public get actions(): ActionModel[] {
    return ActionMockRepositoryService.autoActions;
  }

  public get showPopup(): boolean {
    return this.popupService.isShow;
  }

  protected new(): void {
    const newCase: TestCaseModel = {
      name: "Test Case",
      actions: []
    }
    this.testCaseService.loadTestCase(newCase);
  }

  protected render(): void {
    const fileContent = this.testCaseService.compile(this.testCase)
    const fileName = `${this.testCase.name}.js`;
    const blob = new Blob([fileContent], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  protected handleFile(event: string | undefined) {
    this.showSelectFile = false;
    if (event) {
      const testCase = this.testCaseService.decompile(event);
      this.testCaseService.loadTestCase(testCase);
    }
  }
}
