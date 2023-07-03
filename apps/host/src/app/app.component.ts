import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NestedDragNDropFormComponent } from '@joeczar/nested-drag-n-drop-form';
@Component({
  standalone: true,
  imports: [NestedDragNDropFormComponent, RouterModule],
  selector: 'nested-dd-form-root',
  template: `<ddfc-nested-drag-n-drop-form /> <router-outlet></router-outlet>`,
  styles: [''],
})
export class AppComponent {
  title = 'host';
}
