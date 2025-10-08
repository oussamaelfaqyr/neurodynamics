import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="pt-24 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 py-10 sm:py-16 max-w-5xl">
      
      <!-- Title -->
      <div class="text-center mb-10 sm:mb-16">
        <h1 class="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
          <span class="text-blue-600 block sm:inline">Join</span>
          <span class="text-purple-600 block sm:inline">Neurodynamics</span>
        </h1>
      </div>

      <!-- Welcome Section -->
      <div class="mb-12 sm:mb-16 space-y-8">
        <div class="bg-blue-100/50 border border-blue-200 rounded-3xl p-5 sm:p-8 shadow-xl">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Welcome! 🤖✨
          </h2>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            We're thrilled that you're interested in joining 
            <span class="font-semibold text-blue-700">Neurodynamics</span>, the club born from the fusion of ENSIAS's AI and Robotics clubs. 
            We aim to innovate, build, and explore the future of intelligent systems together.
          </p>
          <p class="text-blue-800 font-semibold mt-4 flex items-center gap-2 text-sm sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8V6a1 1 0 112 0v4h2a1 1 0 010 2h-3a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            Please fill out this form carefully. It takes about 3–5 minutes.
          </p>
        </div>

        <div class="bg-purple-100/50 border border-purple-200 rounded-3xl p-5 sm:p-8 shadow-xl">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Dynamic Cells Structure
          </h3>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Neurodynamics, we're organized into 
            <span class="font-semibold text-purple-700">dynamic cells</span> — specialized teams that collaborate to push innovation. 
            Every member belongs to one technical and one non-technical cell, depending on their interests and skills.
          </p>
        </div>
      </div>

      <!-- Technical Cells -->
      <section class="mb-16">
        <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
          <span class="text-3xl sm:text-4xl">⚙️</span> Technical Cells
        </h3>

        <div class="space-y-6">
          <ng-container *ngFor="let cell of technicalCells">
            <div [class]="cell.border + ' bg-white rounded-r-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-200'">
              <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">{{ cell.icon }} {{ cell.title }}</h4>
              <p class="text-gray-700 text-sm sm:text-base leading-relaxed">{{ cell.description }}</p>
            </div>
          </ng-container>
        </div>
      </section>

      <!-- Non-Technical Cells -->
      <section class="mb-16">
        <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
          <span class="text-3xl sm:text-4xl">🎨</span> Non-Technical Cells
        </h3>

        <div class="space-y-6">
          <ng-container *ngFor="let cell of nonTechnicalCells">
            <div [class]="cell.border + ' bg-white rounded-r-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-200'">
              <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">{{ cell.icon }} {{ cell.title }}</h4>
              <p class="text-gray-700 text-sm sm:text-base leading-relaxed">{{ cell.description }}</p>
            </div>
          </ng-container>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center mt-10 sm:mt-16">
        <a [href]="formUrl" target="_blank"
           class="inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-extrabold text-white 
           bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 
           shadow-xl hover:shadow-purple-400/50 transform hover:scale-105 active:scale-100 transition-all duration-300 ring-2 sm:ring-4 ring-purple-300 ring-opacity-50">
          🚀 Apply Now
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <p class="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
          Ready to shape the future? Join us today!
        </p>
      </div>
    </div>
  </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    :host { font-family: 'Inter', sans-serif; display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinusComponent {
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfpaL9x9XjekDu2awG13RAN-7PNAgwlFohs9aYCxJmOU8diPQ/viewform';

  technicalCells = [
    { icon: '🤖', title: 'AI Cell', border: 'border-l-4 border-blue-600', description: 'Dive into the world of AI — machine learning, neural networks, and NLP. Build intelligent systems and real-world applications.' },
    { icon: '⚡', title: 'Robotics Cell', border: 'border-l-4 border-cyan-600', description: 'Focus on robot design, automation, and control systems. Build and test intelligent robots merging mechanics and AI.' },
    { icon: '📊', title: 'Data Cell', border: 'border-l-4 border-green-600', description: 'Specialize in data analysis and visualization. Extract insights and support other teams with advanced analytics.' },
    { icon: '💡', title: 'Projects Cell', border: 'border-l-4 border-purple-600', description: 'The heart of our innovation — coordinate interdisciplinary projects and ensure smooth collaboration.' },
  ];

  nonTechnicalCells = [
    { icon: '🎨', title: 'Design Cell', border: 'border-l-4 border-pink-600', description: 'Bring ideas to life through visuals — posters, logos, and branding for a modern club identity.' },
    { icon: '🎥', title: 'Media Cell', border: 'border-l-4 border-red-600', description: 'Capture and tell our story through photography, videography, and social media content.' },
    { icon: '💰', title: 'Sponsoring & Partnerships', border: 'border-l-4 border-yellow-600', description: 'Build bridges between Neurodynamics and partners, manage logistics and funding.' },
    { icon: '🎤', title: 'Events & Organization', border: 'border-l-4 border-orange-600', description: 'Plan and coordinate workshops, hackathons, and events that make an impact.' },
  ];
}
