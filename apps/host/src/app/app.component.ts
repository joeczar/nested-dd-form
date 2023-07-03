import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nested-dd-form-root',
  template: `<nested-dd-form-nx-welcome></nested-dd-form-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: [''],
})
export class AppComponent {
  title = 'host';
}
