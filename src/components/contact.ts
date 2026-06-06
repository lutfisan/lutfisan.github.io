import { siteMeta } from '@data/meta';

const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;

const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;

export function initContact(): void {
  const section = document.getElementById('contact');
  if (!section) return;

  section.innerHTML = `
    <div class="max-w-3xl mx-auto px-6 py-(--spacing-section) text-center fade-in-up">
      <div class="stagger-children">
        <!-- Eyebrow -->
        <p class="font-mono text-sm tracking-widest text-accent uppercase mb-4">
          08 / Contact
        </p>

        <!-- Heading -->
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text leading-tight mb-6">
          Let's Secure and Automate What Matters.
        </h2>

        <!-- Subtext -->
        <p class="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Open to cybersecurity, PAM/IAM, network security, infrastructure automation,
          and AI-agent collaboration opportunities.
        </p>

        <!-- Primary CTA -->
        <a
          href="mailto:${siteMeta.email}"
          class="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-background font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-glow mb-10"
          aria-label="Send an email to ${siteMeta.name}"
        >
          ${emailIcon}
          Send an Email
        </a>

        <!-- Secondary links row -->
        <div class="flex items-center justify-center gap-8 mb-10">
          <a
            href="${siteMeta.linkedin}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
            aria-label="Visit LinkedIn profile"
          >
            ${linkedinIcon}
            <span class="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="${siteMeta.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
            aria-label="Visit GitHub profile"
          >
            ${githubIcon}
            <span class="text-sm font-medium">GitHub</span>
          </a>
        </div>

        <!-- Location note -->
        <p class="text-muted text-sm">
          ${siteMeta.location} — open to remote, hybrid, and strategic collaboration.
        </p>
      </div>
    </div>
  `;
}
