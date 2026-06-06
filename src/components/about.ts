import { about } from '@data/about';
import { $ } from '@utils/dom';

const statIcons: Record<string, string> = {
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  'map-pin': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

export function initAbout(): void {
  const section = $<HTMLElement>('#about');
  if (!section) return;

  const paragraphs = about.paragraphs
    .map(
      (p) =>
        `<p class="text-base leading-relaxed text-muted md:text-lg">${p}</p>`
    )
    .join('');

  const statBadges = about.stats
    .map(
      (stat) => `
      <div class="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted">
        <span class="text-accent">${statIcons[stat.icon] ?? ''}</span>
        <span>${stat.label}</span>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="fade-in-up mx-auto max-w-7xl px-6 py-section">
      <div class="mb-12">
        <p class="mb-2 font-mono text-sm tracking-wider text-accent">02 / About</p>
        <h2 id="about-heading" class="font-display text-3xl font-bold text-text md:text-4xl">
          About Me
        </h2>
      </div>

      <div class="grid gap-12 md:grid-cols-[1fr_2fr]">
        <!-- Left column: Avatar + Stats -->
        <div class="flex flex-col items-center gap-6">
          <div
            class="flex h-32 w-32 items-center justify-center rounded-full border-2 border-accent bg-surface shadow-glow"
            role="img"
            aria-label="MLS monogram avatar"
          >
            <span class="font-display text-4xl font-bold text-accent">MLS</span>
          </div>
          <div class="flex flex-wrap justify-center gap-2">
            ${statBadges}
          </div>
        </div>

        <!-- Right column: Bio paragraphs -->
        <div class="flex flex-col gap-5">
          ${paragraphs}
        </div>
      </div>
    </div>
  `;
}
