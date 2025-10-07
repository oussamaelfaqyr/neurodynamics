// joinus.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div class="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <h1 class="text-3xl font-bold text-center">Rejoignez-nous</h1>
          <p class="text-center mt-2 text-blue-100">Remplissez le formulaire ci-dessous</p>
        </div>
        
        <div class="p-6">
          <div class="relative w-full" style="padding-bottom: 74.29%;">
            <iframe 
              [src]="formUrl" 
              class="absolute top-0 left-0 w-full h-full rounded-lg border-0"
              title="Formulaire d'inscription"
              loading="lazy">
              Chargement…
            </iframe>
          </div>
        </div>
        
        <div class="bg-gray-50 p-4 text-center text-sm text-gray-600">
          <p>Besoin d'aide ? Contactez-nous à <span class="text-blue-600 font-medium">support@example.com</span></p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class JoinusComponent {
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfpaL9x9XjekDu2awG13RAN-7PNAgwlFohs9aYCxJmOU8diPQ/viewform?embedded=true';
}


// Usage instructions:
// 1. Make sure you have Tailwind CSS configured in your Angular project
// 2. Import this component in your app.routes.ts or module:
//    import { JoinusComponent } from './joinus/joinus.component';
// 3. Add to routes:
//    { path: 'joinus', component: JoinusComponent }
// 4. Or use directly in a template:
//    <app-joinus></app-joinus>
