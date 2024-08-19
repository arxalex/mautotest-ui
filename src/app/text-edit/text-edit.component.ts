import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text-edit',
  templateUrl: './text-edit.component.html'
})
export class TextEditComponent {
  @Input() public text?: string;
  @Input() public textClass?: string;
  @Input() public placeholder?: string;
  @Input() public withButton?: boolean;
  @Output() public textChanged: EventEmitter<string> = new EventEmitter();
  protected isEdit: boolean = false;

  public onTextChange(newText: string): void {
    this.text = newText;
    this.textChanged.emit(this.text);
  }
}
