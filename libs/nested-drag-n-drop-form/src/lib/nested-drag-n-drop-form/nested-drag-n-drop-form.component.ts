import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragBarComponent } from '../drag-bar/drag-bar.component';
import { DropAreaComponent } from '../drop-area/drop-area.component';

@Component({
  selector: 'ddfc-nested-drag-n-drop-form',
  standalone: true,
  template: `<h1>Nested Drag and Drop Form</h1>
    <div class="flex">
      <ddfc-drag-bar />
      <ddfc-drop-area />
    </div> `,
  styleUrls: ['./nested-drag-n-drop-form.component.scss'],
  imports: [CommonModule, DragBarComponent, DropAreaComponent],
})
export class NestedDragNDropFormComponent {}
