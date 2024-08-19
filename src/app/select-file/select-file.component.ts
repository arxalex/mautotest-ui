import {Component, EventEmitter, Output} from '@angular/core';
import {hide} from "@popperjs/core";

@Component({
  selector: 'app-select-file',
  templateUrl: './select-file.component.html'
})
export class SelectFileComponent {
  @Output() action: EventEmitter<string | undefined> = new EventEmitter();

  protected onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer!.dropEffect = 'copy';
  }

  protected onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  protected onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.files) {
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    }
  }

  protected handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.readFile(file);
    }
  }

  protected readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.action.emit(event.target.result);
    };
    reader.readAsText(file);
  }

  protected onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.readFile(file);
    }
  }

  protected hide() {
    this.action.emit(undefined);
  }
}
