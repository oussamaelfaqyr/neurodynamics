// joinus.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-red-800 relative overflow-hidden flex items-center justify-center p-4">
      <!-- Animated background circles -->
      <div class="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div class="absolute top-40 right-20 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div class="relative z-10 max-w-2xl w-full text-center">
        <!-- Logo Section -->
        <div class="flex justify-between items-start mb-8 px-4">
          <div class="w-24 h-24 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"></div>
          <div class="w-24 h-24 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"></div>
        </div>

        <!-- Robot Image Placeholder with Orange Circle -->
        <div class="relative mb-8">
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full"></div>
          <div class="relative z-10 flex justify-center items-end h-96">
            <div class="w-48 h-64 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full relative shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <!-- Robot face details -->
              <div class="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-40 bg-white rounded-3xl"></div>
              <div class="absolute top-32 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-lg"></div>
            </div>
          </div>
        </div>

        <!-- JOIN US Text -->
        <div class="mb-8 transform hover:scale-110 transition-transform duration-300">
          <h1 class="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 drop-shadow-2xl" 
              style="font-family: 'Fredoka One', cursive; text-shadow: 4px 4px 0px rgba(0,0,0,0.3);">
            JOIN US
          </h1>
        </div>

        <!-- Purple Banner -->
        <div class="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 rounded-full py-6 px-8 mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50">
          <h2 class="text-3xl font-black text-yellow-300 mb-2" style="font-family: 'Fredoka One', cursive;">
            NEURODYNAMICS IS RECRUITING
          </h2>
          <p class="text-white text-xl italic font-light" style="font-family: 'Brush Script MT', cursive;">
            Apply now and become part of the future
          </p>
        </div>

        <!-- Apply Button -->
        <div class="mb-8">
          <a [href]="formUrl" 
             target="_blank"
             class="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-purple-700 bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-purple-50 to-purple-100 group-hover:from-purple-50 group-hover:to-white transition-all duration-300"></span>
            <span class="relative flex items-center gap-3">
              <span class="material-icons text-3xl">rocket_launch</span>
              APPLY NOW
              <span class="material-icons text-3xl animate-bounce">arrow_forward</span>
            </span>
          </a>
        </div>

        <!-- Social Media Icons -->
        <div class="flex justify-center gap-6">
          <a href="#" class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-xl">
            <span class="material-icons text-red-600 text-2xl">photo_camera</span>
          </a>
          <a href="#" class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-xl">
            <span class="material-icons text-red-600 text-2xl">link</span>
          </a>
          <a href="#" class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:rotate-12 transition-all duration-300 hover:shadow-xl">
            <span class="material-icons text-red-600 text-2xl">facebook</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `]
})
export class JoinusComponent {
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfpaL9x9XjekDu2awG13RAN-7PNAgwlFohs9aYCxJmOU8diPQ/viewform';
}


// Make sure to add Material Icons in your index.html:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
