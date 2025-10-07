// joinus.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white">
      <div class="container mx-auto px-20 py-16 max-w-5xl">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold mb-4">
            <span class="text-blue-600">Join</span> <span class="text-purple-600">Neurodynamics</span>
          </h1>
          <p class="text-xl text-gray-600">AI & Robotics Club — ENSIAS</p>
        </div>

        <!-- Welcome Section -->
        <div class="mb-16">
          <div class="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Welcome! 🤖✨
            </h2>
            <p class="text-gray-700 text-lg leading-relaxed mb-4">
              We're thrilled that you're interested in joining <span class="font-semibold text-blue-600">Neurodynamics</span>, the club born from the fusion of ENSIAS's AI and Robotics clubs. We aim to innovate, build, and explore the future of intelligent systems together.
            </p>
            <p class="text-gray-600 font-medium">
              ⏱️ Please fill out this form carefully. It takes about 3–5 minutes.
            </p>
          </div>

          <div class="bg-purple-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Dynamic Cells Structure
            </h3>
            <p class="text-gray-700 leading-relaxed">
              At Neurodynamics, we're organized into <span class="font-semibold text-purple-600">dynamic cells</span> — specialized teams that collaborate to push the limits of innovation. Every member belongs to <span class="font-semibold text-blue-600">one technical cell</span> and <span class="font-semibold text-pink-600">one non-technical cell</span>, depending on their interests and skills.
            </p>
          </div>
        </div>

        <!-- Technical Cells -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold text-gray-900 mb-8">⚙️ Technical Cells</h3>
          
          <div class="space-y-6">
            <!-- AI Cell -->
            <div class="border-l-4 border-blue-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">🤖 AI Cell</h4>
              <p class="text-gray-700">
                Dive into the world of artificial intelligence — from machine learning to neural networks and natural language processing. Members work on smart systems, predictive models, and real-world AI applications.
              </p>
            </div>

            <!-- Robotics Cell -->
            <div class="border-l-4 border-cyan-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">⚡ Robotics Cell</h4>
              <p class="text-gray-700">
                Focus on robot design, automation, and control systems. Members build, program, and test robots that merge mechanical engineering and AI.
              </p>
            </div>

            <!-- Data Cell -->
            <div class="border-l-4 border-green-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">📊 Data Cell</h4>
              <p class="text-gray-700">
                Specialize in data analysis, visualization, and machine learning pipelines. This team extracts insights from data and supports other projects with valuable analytics.
              </p>
            </div>

            <!-- Projects Cell -->
            <div class="border-l-4 border-purple-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">💡 Projects Cell</h4>
              <p class="text-gray-700">
                The heart of our innovation — this cell connects all others. Members manage interdisciplinary projects, prototype ideas, and ensure smooth collaboration between technical and non-technical teams.
              </p>
            </div>
          </div>
        </div>

        <!-- Non-Technical Cells -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold text-gray-900 mb-8">🎨 Non-Technical Cells</h3>
          
          <div class="space-y-6">
            <!-- Design Cell -->
            <div class="border-l-4 border-pink-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">🎨 Design Cell</h4>
              <p class="text-gray-700">
                Bring ideas to life through visual creativity. Members design logos, posters, and graphics that define the club's identity, ensuring every project and event has a strong, modern, and consistent look.
              </p>
            </div>

            <!-- Media Cell -->
            <div class="border-l-4 border-red-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">🎥 Media Cell</h4>
              <p class="text-gray-700">
                Tell the story of Neurodynamics through digital content. Members handle photography, videography, editing, and social-media storytelling to highlight the club's activities and achievements.
              </p>
            </div>

            <!-- Sponsoring Cell -->
            <div class="border-l-4 border-yellow-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">💰 Sponsoring & Partnerships Cell</h4>
              <p class="text-gray-700">
                Build bridges between Neurodynamics and the outside world — seek sponsorships, manage partnerships, and handle logistics for events and projects.
              </p>
            </div>

            <!-- Events Cell -->
            <div class="border-l-4 border-orange-600 bg-gray-50 rounded-r-xl p-6 hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-bold text-gray-900 mb-2">🎤 Events & Organization Cell</h4>
              <p class="text-gray-700">
                Plan and coordinate workshops, conferences, hackathons, and recruitment events. Members ensure every Neurodynamics event runs smoothly and memorably.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <a [href]="formUrl" 
             target="_blank"
             class="inline-flex items-center gap-3 px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span>🚀</span>
            Apply Now
            <span>→</span>
          </a>
          <p class="text-gray-600 mt-6">
            Ready to shape the future? Join us today!
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class JoinusComponent {
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfpaL9x9XjekDu2awG13RAN-7PNAgwlFohs9aYCxJmOU8diPQ/viewform';
}
