import { $ } from '@utils/dom';
import { skillGroups } from '@data/skills';

function renderSkillGroup(group: typeof skillGroups[number]): string {
  const pills = group.items
    .map(
      (item) => `
        <span
          class="pill-badge inline-flex items-center px-3 py-1 rounded-full text-xs font-mono
                 bg-surface border border-border text-accent"
        >${item}</span>`,
    )
    .join('');

  return `
    <div class="bg-surface border border-border rounded-[var(--radius-card)] p-6">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-accent" aria-hidden="true">${group.icon}</span>
        <h3 class="font-display text-lg font-semibold text-text">${group.label}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        ${pills}
      </div>
    </div>`;
}

export function initSkills(): void {
  const section = $<HTMLElement>('#skills');
  if (!section) return;

  const markup = `
    <div class="max-w-7xl mx-auto px-6 py-(--spacing-section)">
      <!-- Section heading -->
      <div class="mb-12 fade-in-up">
        <p class="text-sm font-mono tracking-widest uppercase text-accent mb-2">03 / Skills</p>
        <h2 id="skills-heading" class="font-display text-3xl md:text-4xl font-bold text-text">
          What I Work With
        </h2>
      </div>

      <!-- Skill groups grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        ${skillGroups.map(renderSkillGroup).join('')}
      </div>
    </div>`;

  section.innerHTML = markup;
}
