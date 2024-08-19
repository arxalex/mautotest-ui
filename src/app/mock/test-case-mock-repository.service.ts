import {TestCaseModel} from "../models/test-case.model";
import {ActionMockRepositoryService} from "./action-mock-repository.service";

export class TestCaseMockRepositoryService {
  public static get testCase(): TestCaseModel {
    return {
      name: "Test Case Mock",
      actions: ActionMockRepositoryService.autoActions.filter(a => a.id && a.id > 0 && a.id < 3),
    }
  }
}
