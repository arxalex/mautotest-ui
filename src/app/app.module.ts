import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionListComponent } from './action-list/action-list.component';
import { ActionComponent } from './action/action.component';
import { ManualComponent } from './action/manual/manual.component';
import { AutoComponent } from './action/auto/auto.component';
import { AutoActionsListComponent } from './auto-actions-list/auto-actions-list.component';
import {ActionService} from "./services/action.service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {TestCaseService} from "./services/test-case.service";
import {FormsModule} from "@angular/forms";
import { TextEditComponent } from './text-edit/text-edit.component';
import { ActionArgComponent } from './action/auto/action-arg/action-arg.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import {PopupService} from "./services/popup.service";
import { SelectFileComponent } from './select-file/select-file.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionListComponent,
    ActionComponent,
    ManualComponent,
    AutoComponent,
    AutoActionsListComponent,
    TextEditComponent,
    ActionArgComponent,
    ModalDialogComponent,
    SelectFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule
  ],
  providers: [
    ActionService,
    TestCaseService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
