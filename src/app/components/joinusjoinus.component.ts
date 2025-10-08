import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Load Inter Font -->
    <div class="font-sans min-h-screen bg-gray-50 pb-20">
      
      <!-- Container -->
      <div class="container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
        
        <!-- Header & Title -->
        <header class="text-center mb-12 sm:mb-20 pt-8">
          <h1 class="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tighter text-gray-900 leading-tight">
            <span class="text-indigo-700">Join</span>
            <span class="text-gray-800"> Neurodynamics</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
            Innovate, build, and explore the future of intelligent systems with us.
          </p>
        </header>

        <!-- Welcome Section Card -->
        <div class="mb-12 sm:mb-20">
          <div class="bg-white border border-indigo-100 rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
            
            <!-- Subtle wave pattern for visual interest (less AI-like) -->
            <div class="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e0e7ff" d="M0 400V300c100-50 200 50 300 0s200-50 300 0v100H0z"/>
                    <path fill="#c7d2fe" d="M0 400V350c100-30 200 30 300 0s200-30 300 0v50H0z"/>
                </svg>
            </div>

            <div class="relative">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div [innerHTML]="getIcon('sparkles', 'w-7 h-7 text-indigo-600')"></div>
                Welcome to the Fusion
              </h2>
              <p class="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                We're thrilled you're interested in joining <span class="font-semibold text-indigo-700">Neurodynamics</span>, the club born from the fusion of ENSIAS's AI and Robotics clubs. We aim to innovate, build, and explore the future of intelligent systems together.
              </p>
              
              <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg text-sm sm:text-base">
                <p class="text-indigo-800 font-semibold flex items-center gap-2">
                  <div [innerHTML]="getIcon('clock', 'w-5 h-5 text-indigo-600 flex-shrink-0')"></div>
                  Please fill out this form carefully. It takes about 3–5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic Cells Structure Introduction -->
        <div class="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our Dynamic Cells Structure
          </h2>
          <p class="text-gray-600 text-lg">
            Neurodynamics is organized into <span class="font-semibold text-indigo-700">dynamic cells</span> — specialized, cross-functional teams that collaborate to push the boundaries of innovation. Every member belongs to one technical and one non-technical cell.
          </p>
        </div>


        <!-- Technical Cells -->
        <section class="mb-16">
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
            Technical Cells
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ng-container *ngFor="let cell of technicalCells">
              <div class="bg-white rounded-xl p-6 sm:p-8 shadow-md border-t-4 border-indigo-500 hover:shadow-xl transition-all duration-300">
                <div [innerHTML]="getIcon(cell.icon, 'w-10 h-10 text-indigo-600 mb-3')"></div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">{{ cell.title }}</h4>
                <p class="text-gray-600 text-base leading-relaxed">{{ cell.description }}</p>
              </div>
            </ng-container>
          </div>
        </section>

        <!-- Non-Technical Cells -->
        <section class="mb-16">
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
            Non-Technical Cells
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ng-container *ngFor="let cell of nonTechnicalCells">
              <div class="bg-white rounded-xl p-6 sm:p-8 shadow-md border-t-4 border-gray-400 hover:shadow-xl transition-all duration-300">
                <div [innerHTML]="getIcon(cell.icon, 'w-10 h-10 text-gray-600 mb-3')"></div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">{{ cell.title }}</h4>
                <p class="text-gray-600 text-base leading-relaxed">{{ cell.description }}</p>
              </div>
            </ng-container>
          </div>
        </section>

        <!-- CTA Button -->
        <div class="text-center mt-12 sm:mt-20">
          <a [href]="formUrl" target="_blank"
            class="inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-4 sm:py-5 text-lg sm:text-xl font-extrabold text-white
            bg-indigo-700 rounded-full hover:bg-indigo-800
            shadow-xl shadow-indigo-400/50 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300
            focus:ring-4 focus:ring-indigo-300 focus:outline-none">
            Apply Now
            <div [innerHTML]="getIcon('arrow-right', 'w-6 h-6 text-white')"></div>
          </a>
          <p class="text-gray-500 mt-6 text-sm sm:text-base">
            Ready to shape the future? We can't wait to meet you!
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Import Inter Font */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    :host { font-family: 'Inter', sans-serif; display: block; }

    /* Custom style to integrate SVG icons safely into Angular template */
    .font-sans {
        font-family: 'Inter', sans-serif;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinusComponent {
  formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfpaL9x9XjekDu2awG13RAN-7PNAgwlFohs9aYCxJmOU8diPQ/viewform';

  // Defines the content using text names for the new SVG icons
  technicalCells = [
    { icon: 'brain', title: 'AI Cell', description: 'Dive into the world of AI — machine learning, neural networks, and NLP. Build intelligent systems and real-world applications.' },
    { icon: 'settings', title: 'Robotics Cell', description: 'Focus on robot design, automation, and control systems. Build and test intelligent robots merging mechanics and AI.' },
    { icon: 'bar-chart-2', title: 'Data Cell', description: 'Specialize in data analysis and visualization. Extract insights and support other teams with advanced analytics.' },
    { icon: 'git-branch', title: 'Projects Cell', description: 'The heart of our innovation — coordinate interdisciplinary projects and ensure smooth collaboration and delivery.' },
  ];

  nonTechnicalCells = [
    { icon: 'palette', title: 'Design Cell', description: 'Bring ideas to life through visuals — posters, logos, and branding for a modern, recognizable club identity.' },
    { icon: 'camera', title: 'Media Cell', description: 'Capture and tell our story through high-quality photography, videography, and compelling social media content.' },
    { icon: 'handshake', title: 'Sponsoring & Partnerships', description: 'Build bridges between Neurodynamics and corporate partners, manage logistics and secure necessary funding.' },
    { icon: 'calendar-check', title: 'Events & Organization', description: 'Plan and coordinate high-impact workshops, hackathons, and professional events that drive learning and networking.' },
  ];

  /**
   * Generates an inline SVG for the component using the Lucide icon library's paths.
   * This avoids external dependencies and keeps the code self-contained and fast.
   */
  getIcon(name: string, classes: string): string {
    const icons: { [key: string]: string } = {
      // General
      'sparkles': '<path d="M9.9 5.86a.5.5 0 0 0-.85-.18L7.17 7.7a.5.5 0 0 1-.36.16H4.86a.5.5 0 0 0-.44.75l1.6 2.76a.5.5 0 0 1 .18.36v2.32a.5.5 0 0 0 .9.3l1.88-2.02a.5.5 0 0 1 .74 0l1.88 2.02a.5.5 0 0 0 .9-.3v-2.32a.5.5 0 0 1 .18-.36l1.6-2.76a.5.5 0 0 0-.44-.75h-1.95a.5.5 0 0 1-.36-.16zM20 2v3M4 19v3M10 21h4M10 3h4"/>',
      'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      'arrow-right': '<line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/>',
      // Technical
      'brain': '<path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM12 20a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3z"/><path d="M16 8a4 4 0 0 1 4 4"/><path d="M4 12a4 4 0 0 1 4-4"/><path d="M16 16a4 4 0 0 0 4-4"/><path d="M4 12a4 4 0 0 0 4 4"/>',
      'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18A2 2 0 0 1 9.9 6.23L8 7.82a2 2 0 0 0-1.74.84l-1.81 3.52a2 2 0 0 0-.08 1.95l1.81 3.52a2 2 0 0 0 1.74.84l1.9-.94a2 2 0 0 1 2.22 0l1.9.94a2 2 0 0 0 1.74-.84l1.81-3.52a2 2 0 0 0 .08-1.95l-1.81-3.52a2 2 0 0 0-1.74-.84l-1.9.94A2 2 0 0 1 12.22 2Z"/><circle cx="12" cy="12" r="3"/>',
      'bar-chart-2': '<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>',
      'git-branch': '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
      // Non-Technical
      'palette': '<circle cx="12" cy="12" r="10"/><path d="M12 5a7 7 0 0 0 7 7 5 5 0 0 1-5 5 7 7 0 0 0-7-7 5 5 0 0 1 5-5z"/>',
      'camera': '<path d="M14.5 4h-1c-.8 0-1.5.7-1.5 1.5v.5h-3v-.5c0-.8-.7-1.5-1.5-1.5h-1C6.7 4 6 4.7 6 5.5v13c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5V5.5c0-.8-.7-1.5-1.5-1.5z"/><circle cx="12" cy="13" r="3"/>',
      'handshake': '<path d="m11 17 2-3a3 3 0 1 1 5-2l2 3M2 17l4-4c.4-.6.8-1 1-2.1l1.5-3c.8-1.4 1.8-2.5 3-3.1"/><path d="M7 21h1v-4"/><path d="M21 21h1v-4"/><path d="M22 10a7 7 0 1 0-14 0"/><path d="M8 10a7 7 0 1 1 14 0"/><path d="M10.85 10.85a.5.5 0 0 0 .7 0l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5zM12 16h4"/>',
      'calendar-check': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 15l2 2l4-4"/>'
    };

    const svgPath = icons[name] || '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}">${svgPath}</svg>`;
  }
}
