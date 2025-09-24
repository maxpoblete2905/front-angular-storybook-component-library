import { Component, signal } from '@angular/core';
import { LoginForm } from "./components/login-form/login-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `

  @let data = lastLoginData();
  
    <div class="app-container">
      <h1>{{ title() }} - Storybook Demo</h1>
      
      <!-- Captura el evento loginSubmit -->
      <app-login-form (loginSubmit)="onLoginSubmit($event)" />
      
      <!-- Muestra los datos recibidos -->
       @if(data){
        <div class="login-data">
         <h3>Datos recibidos del formulario:</h3>
         <pre>{{ data?.email }}- {{ data?.password }}</pre>
        </div>
       }
    </div>
  `,
  imports: [LoginForm]
})
export class App {
  protected readonly title = signal('catalogo-componentes');

  // Signal para almacenar los últimos datos de login
  protected readonly lastLoginData = signal<{ email: string; password: string } | null>(null);

  onLoginSubmit(loginData: { email: string; password: string }): void {
    console.log('Datos recibidos del formulario:', loginData);

    // Almacena los datos en el signal
    this.lastLoginData.set(loginData);

    // Aquí puedes hacer lo que necesites con los datos:
    // - Enviar a una API
    // - Redirigir al usuario
    // - Mostrar loading, etc.

    // Ejemplo: Limpiar después de 5 segundos
    setTimeout(() => {
      this.lastLoginData.set(null);
    }, 5000);
  }
}