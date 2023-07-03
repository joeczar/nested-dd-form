import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from '../group/group.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { TextfieldComponent } from '../textfield/textfield.component';

@Component({
  selector: 'ddfc-form-components',
  standalone: true,
  template: `<p>form-components works!</p>
    <ddfc-textfield></ddfc-textfield>
    <ddfc-textarea></ddfc-textarea>
    <ddfc-group></ddfc-group> `,
  styles: [],
  imports: [
    CommonModule,
    GroupComponent,
    TextareaComponent,
    TextfieldComponent,
  ],
})
export class FormComponentsComponent {}
