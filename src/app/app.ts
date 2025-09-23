import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>{{ title() }} - Storybook Demo</h1>
    </div>
  `
})
export class App {
  protected readonly title = signal('catalogo-componentes');
}
