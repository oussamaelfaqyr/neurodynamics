import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Le contenu de la page utilise maintenant la police Inter -->
    <div class="min-h-screen bg-gray-50">
      <div class="container mx-auto px-6 py-16 max-w-5xl">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-6xl font-extrabold mb-4 tracking-tight">
            <span class="text-blue-600">Join</span> <span class="text-purple-600">Neurodynamics</span>
          </h1>
          <p class="text-xl text-gray-600 font-medium">AI & Robotics Club — ENSIAS</p>
        </div>

        <!-- Welcome Section -->
        <div class="mb-16 space-y-8">
          <div class="bg-blue-100/50 border border-blue-200 rounded-3xl p-8 shadow-xl">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Welcome! 🤖✨
            </h2>
            <p class="text-gray-700 text-lg leading-relaxed mb-4">
              We're thrilled that you're interested in joining <span class="font-semibold text-blue-700">Neurodynamics</span>, the club born from the fusion of ENSIAS's AI and Robotics clubs. We aim to innovate, build, and explore the future of intelligent systems together.
            </p>
            <p class="text-blue-800 font-semibold mt-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8V6a1 1 0 112 0v4h2a1 1 0 010 2h-3a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
              Please fill out this form carefully. It takes about 3–5 minutes.
            </p>
          </div>

          <div class="bg-purple-100/50 border border-purple-200 rounded-3xl p-8 shadow-xl">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Dynamic Cells Structure
            </h3>
            <p class="text-gray-700 leading-relaxed">
              At Neurodynamics, we're organized into <span class="font-semibold text-purple-700">dynamic cells</span> — specialized teams that collaborate to push the limits of innovation. Every member belongs to <span class="font-semibold text-blue-700">one technical cell</span> and <span class="font-semibold text-pink-600">one non-technical cell</span>, depending on their interests and skills.
            </p>
          </div>
        </div>

        <!-- Technical Cells -->
        <div class="mb-16">
          <h3 class="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
            <span class="text-4xl">⚙️</span> Technical Cells
          </h3>
          
          <div class="space-y-6">
            <!-- AI Cell -->
            <div class="border-l-4 border-blue-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">🤖 AI Cell</h4>
              <p class="text-gray-700">
                Dive into the world of artificial intelligence — from machine learning to neural networks and natural language processing. Members work on smart systems, predictive models, and real-world AI applications.
              </p>
            </div>

            <!-- Robotics Cell -->
            <div class="border-l-4 border-cyan-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">⚡ Robotics Cell</h4>
              <p class="text-gray-700">
                Focus on robot design, automation, and control systems. Members build, program, and test robots that merge mechanical engineering and AI.
              </p>
            </div>

            <!-- Data Cell -->
            <div class="border-l-4 border-green-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">📊 Data Cell</h4>
              <p class="text-gray-700">
                Specialize in data analysis, visualization, and machine learning pipelines. This team extracts insights from data and supports other projects with valuable analytics.
              </p>
            </div>

            <!-- Projects Cell -->
            <div class="border-l-4 border-purple-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">💡 Projects Cell</h4>
              <p class="text-gray-700">
                The heart of our innovation — this cell connects all others. Members manage interdisciplinary projects, prototype ideas, and ensure smooth collaboration between technical and non-technical teams.
              </p>
            </div>
          </div>
        </div>

        <!-- Non-Technical Cells -->
        <div class="mb-16">
          <h3 class="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
            <span class="text-4xl">🎨</span> Non-Technical Cells
          </h3>
          
          <div class="space-y-6">
            <!-- Design Cell -->
            <div class="border-l-4 border-pink-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">🎨 Design Cell</h4>
              <p class="text-gray-700">
                Bring ideas to life through visual creativity. Members design logos, posters, and graphics that define the club's identity, ensuring every project and event has a strong, modern, and consistent look.
              </p>
            </div>

            <!-- Media Cell -->
            <div class="border-l-4 border-red-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">🎥 Media Cell</h4>
              <p class="text-gray-700">
                Tell the story of Neurodynamics through digital content. Members handle photography, videography, editing, and social-media storytelling to highlight the club's activities and achievements.
              </p>
            </div>

            <!-- Sponsoring Cell -->
            <div class="border-l-4 border-yellow-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">💰 Sponsoring & Partnerships Cell</h4>
              <p class="text-gray-700">
                Build bridges between Neurodynamics and the outside world — seek sponsorships, manage partnerships, and handle logistics for events and projects.
              </p>
            </div>

            <!-- Events Cell -->
            <div class="border-l-4 border-orange-600 bg-white rounded-r-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">🎤 Events & Organization Cell</h4>
              <p class="text-gray-700">
                Plan and coordinate workshops, conferences, hackathons, and recruitment events. Members ensure every Neurodynamics event runs smoothly and memorably.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center mt-16">
          <a [href]="formUrl" 
             target="_blank"
             class="inline-flex items-center justify-center gap-3 px-12 py-5 text-xl font-extrabold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-purple-400/50 transform hover:scale-105 active:scale-100 transition-all duration-300 ring-4 ring-purple-300 ring-opacity-50">
            <span>🚀</span>
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p class="text-gray-600 mt-6 text-base">
            Ready to shape the future? Join us today!
          </p>
        </div>
      </div>
    </div>
  `,
  // 1. Import de la police Inter
  // 2. Application de la police au composant via :host
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    :host {
      font-family: 'Inter', sans-serif;
      /* Amélioration visuelle pour un look plus moderne */
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinusComponent {
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfpaL9x9XjekDu2awG13RAN-7PNAgwlFohs9aYCxJmOU8diPQ/viewform';
}
