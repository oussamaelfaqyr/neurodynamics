// joinus.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      <!-- Animated particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div *ngFor="let i of particles" 
             class="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
             [style.left.%]="i * 10"
             [style.animation-delay.s]="i * 0.5"></div>
      </div>

      <!-- Grid overlay -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div class="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-12 animate-fade-in">
          <div class="inline-block">
            <h1 class="text-6xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-2xl">
              NEURODYNAMICS
            </h1>
            <div class="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          <p class="text-2xl text-cyan-300 mt-4 font-light">
            AI & Robotics Club — ENSIAS
          </p>
        </div>

        <!-- Welcome Section -->
        <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500">
          <div class="flex items-start gap-4 mb-6">
            <span class="material-icons text-5xl text-cyan-400">rocket_launch</span>
            <div>
              <h2 class="text-3xl font-bold text-white mb-3">
                Welcome to the Future! 🤖✨
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed">
                We're thrilled that you're interested in joining <span class="text-cyan-400 font-semibold">Neurodynamics</span>, the club born from the fusion of ENSIAS's AI and Robotics clubs. We aim to innovate, build, and explore the future of intelligent systems together.
              </p>
              <p class="text-yellow-400 mt-4 font-medium">
                ⏱️ Please fill out this form carefully. It takes about 3–5 minutes.
              </p>
            </div>
          </div>
        </div>

        <!-- Cells Introduction -->
        <div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-purple-500/20">
          <h2 class="text-3xl font-bold text-white mb-4 flex items-center gap-3" style="font-family: 'Rajdhani', sans-serif;">
            <span class="material-icons text-4xl text-purple-400">hub</span>
            Dynamic Cells Structure
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed" style="font-family: 'Inter', sans-serif;">
            At Neurodynamics, we're organized into <span class="text-purple-400 font-semibold">dynamic cells</span> — specialized teams that collaborate to push the limits of innovation. Every member belongs to <span class="text-cyan-400 font-semibold">one technical cell</span> and <span class="text-pink-400 font-semibold">one non-technical cell</span>, depending on their interests and skills.
          </p>
        </div>

        <!-- Technical Cells -->
        <div class="mb-8">
          <h3 class="text-4xl font-black text-cyan-400 mb-6 flex items-center gap-3" style="font-family: 'Orbitron', sans-serif;">
            <span class="material-icons text-5xl">precision_manufacturing</span>
            ⚙️ TECHNICAL CELLS
          </h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- AI Cell -->
            <div class="group bg-gradient-to-br from-blue-600/10 to-blue-900/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-blue-400">psychology</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">🤖 AI Cell</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                Dive into the world of artificial intelligence — from machine learning to neural networks and natural language processing. Members work on smart systems, predictive models, and real-world AI applications.
              </p>
            </div>

            <!-- Robotics Cell -->
            <div class="group bg-gradient-to-br from-cyan-600/10 to-cyan-900/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-cyan-400">smart_toy</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">⚡ Robotics Cell</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                Focus on robot design, automation, and control systems. Members build, program, and test robots that merge mechanical engineering and AI.
              </p>
            </div>

            <!-- Data Cell -->
            <div class="group bg-gradient-to-br from-green-600/10 to-green-900/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 hover:border-green-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-green-400">analytics</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">📊 Data Cell</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                Specialize in data analysis, visualization, and machine learning pipelines. This team extracts insights from data and supports other projects with valuable analytics.
              </p>
            </div>

            <!-- Projects Cell -->
            <div class="group bg-gradient-to-br from-purple-600/10 to-purple-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-purple-400">lightbulb</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">💡 Projects Cell</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                The heart of our innovation — this cell connects all others. Members manage interdisciplinary projects, prototype ideas, and ensure smooth collaboration between technical and non-technical teams.
              </p>
            </div>
          </div>
        </div>

        <!-- Non-Technical Cells -->
        <div class="mb-12">
          <h3 class="text-4xl font-black text-pink-400 mb-6 flex items-center gap-3" style="font-family: 'Orbitron', sans-serif;">
            <span class="material-icons text-5xl">palette</span>
            🎨 NON-TECHNICAL CELLS
          </h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Design Cell -->
            <div class="group bg-gradient-to-br from-pink-600/10 to-pink-900/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-pink-400">design_services</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">🎨 Design Cell</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                Bring ideas to life through visual creativity. Members design logos, posters, and graphics that define the club's identity, ensuring every project and event has a strong, modern, and consistent look.
              </p>
            </div>

            <!-- Media Cell -->
            <div class="group bg-gradient-to-br from-red-600/10 to-red-900/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 hover:border-red-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-red-400">videocam</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">🎥 Media Cell</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                Tell the story of Neurodynamics through digital content. Members handle photography, videography, editing, and social-media storytelling to highlight the club's activities and achievements.
              </p>
            </div>

            <!-- Sponsoring Cell -->
            <div class="group bg-gradient-to-br from-yellow-600/10 to-yellow-900/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-yellow-400">handshake</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">💰 Sponsoring & Partnerships</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                Build bridges between Neurodynamics and the outside world — seek sponsorships, manage partnerships, and handle logistics for events and projects.
              </p>
            </div>

            <!-- Events Cell -->
            <div class="group bg-gradient-to-br from-orange-600/10 to-orange-900/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-icons text-4xl text-orange-400">event</span>
                <h4 class="text-2xl font-bold text-white" style="font-family: 'Rajdhani', sans-serif;">🎤 Events & Organization</h4>
              </div>
              <p class="text-gray-300 leading-relaxed" style="font-family: 'Inter', sans-serif;">
                Plan and coordinate workshops, conferences, hackathons, and recruitment events. Members ensure every Neurodynamics event runs smoothly and memorably.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <a [href]="formUrl" 
             target="_blank"
             class="group relative inline-flex items-center justify-center gap-4 px-12 py-6 text-2xl font-black text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-cyan-500/50"
             style="font-family: 'Orbitron', sans-serif;">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span class="relative flex items-center gap-3">
              <span class="material-icons text-4xl animate-pulse">rocket</span>
              JOIN NEURODYNAMICS
              <span class="material-icons text-4xl group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
            </span>
          </a>
          <p class="text-gray-400 mt-6 text-lg" style="font-family: 'Inter', sans-serif;">
            🚀 Ready to shape the future? Apply now!
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    
    @keyframes float {
      0%, 100% { 
        transform: translateY(0) translateX(0); 
        opacity: 0;
      }
      50% { 
        opacity: 1;
      }
      100% { 
        transform: translateY(-100vh) translateX(50px);
        opacity: 0;
      }
    }
    
    .animate-float {
      animation: float 8s infinite;
    }
    
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
    
    .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(100, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
    }
  `]
})
export class JoinusComponent {
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfpaL9x9XjekDu2awG13RAN-7PNAgwlFohs9aYCxJmOU8diPQ/viewform';
  particles = Array.from({length: 20}, (_, i) => i);
}


// Add to index.html:
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
