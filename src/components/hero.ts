import { siteMeta } from '@data/meta';
import { $ } from '@utils/dom';

const ROTATING_TITLES = [
  'Network Security Manager',
  'CyberArk PAM / IAM Specialist',
  'Security Automation Builder',
  'Mission-Critical Infrastructure Operator',
  'AI-Agent Systems Explorer',
] as const;

const ROLE_BADGES = [
  'CyberArk PAM / IAM Specialist',
  'Network Security Engineer',
  'Automation & Scripting',
  'Mission-Critical Infrastructure',
] as const;

const CYCLE_INTERVAL = 3000;

function buildHeroHTML(): string {
  const badgesHTML = ROLE_BADGES.map(
    (badge) =>
      `<span class="pill-badge inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full
                    border border-border text-muted bg-surface hover:text-accent transition-colors duration-200">
        ${badge}
      </span>`
  ).join('\n          ');

  return `
    <div class="hero-grid-bg min-h-screen flex items-center relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <!-- Left column: content -->
          <div class="flex flex-col gap-6 fade-in-up">

            <!-- Eyebrow -->
            <div class="flex items-center gap-2 text-sm text-muted">
              <span class="status-dot inline-block w-2 h-2 rounded-full bg-success"></span>
              <span>${siteMeta.location} · Cybersecurity · Network Security · Automation</span>
            </div>

            <!-- Heading -->
            <h1 id="hero-heading" class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-tight">
              ${siteMeta.name}
            </h1>

            <!-- Rotating subtitle -->
            <div class="h-8 sm:h-9 relative overflow-hidden" aria-live="polite" aria-atomic="true">
              <p id="hero-subtitle" class="text-lg sm:text-xl font-semibold text-accent title-enter">
                ${ROTATING_TITLES[0]}
              </p>
            </div>

            <!-- Tagline -->
            <p class="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              ${siteMeta.tagline}
            </p>

            <!-- Role badges -->
            <div class="flex flex-wrap gap-2">
              ${badgesHTML}
            </div>

            <!-- CTA buttons -->
            <div class="flex flex-wrap items-center gap-4 mt-2">
              <a href="#projects"
                class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg
                       bg-accent text-background hover:bg-accent/90 transition-colors duration-200
                       focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                View Projects
              </a>
              <a href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg
                       border border-border text-text hover:border-accent hover:text-accent
                       transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Get in Touch
              </a>
            </div>

            <!-- Social links -->
            <div class="flex items-center gap-4 mt-2">
              <a href="${siteMeta.github}" target="_blank" rel="noopener noreferrer"
                class="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-raised transition-colors duration-200"
                aria-label="GitHub profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="${siteMeta.linkedin}" target="_blank" rel="noopener noreferrer"
                class="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-raised transition-colors duration-200"
                aria-label="LinkedIn profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:${siteMeta.email}"
                class="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-raised transition-colors duration-200"
                aria-label="Send email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right column: hero shield image -->
          <div class="hidden lg:flex items-center justify-center relative">
            <div class="relative">
              <!-- Subtle glow behind image -->
              <div class="absolute inset-0 rounded-full bg-accent/10 blur-3xl scale-75" aria-hidden="true"></div>
              <img
                src="/assets/hero-shield.png"
                alt="Cybersecurity shield illustration"
                class="relative w-80 h-80 xl:w-96 xl:h-96 object-contain drop-shadow-lg"
                loading="eager"
                width="384"
                height="384"
              />
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted" aria-hidden="true">
        <span class="text-xs tracking-widest uppercase">Scroll</span>
        <div class="scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </div>
  `;
}

function setupSubtitleCycling(): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const subtitleEl = $<HTMLElement>('#hero-subtitle');
  if (!subtitleEl) return;

  let currentIndex = 0;

  setInterval(() => {
    // Start exit animation
    subtitleEl.classList.remove('title-enter');
    subtitleEl.classList.add('title-exit');

    // After exit animation completes, swap text and enter
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % ROTATING_TITLES.length;
      subtitleEl.textContent = ROTATING_TITLES[currentIndex] ?? '';
      subtitleEl.classList.remove('title-exit');
      subtitleEl.classList.add('title-enter');
    }, 500); // matches fadeOutUp animation duration
  }, CYCLE_INTERVAL);
}

export function initHero(): void {
  const section = $<HTMLElement>('#hero');
  if (!section) return;

  section.innerHTML = buildHeroHTML();

  setupSubtitleCycling();
}
