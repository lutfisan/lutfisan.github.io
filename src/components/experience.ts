import { experience } from '@data/experience';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

function formatDate(raw: string): string {
  if (raw.toLowerCase() === 'present') return 'Present';
  const [year, month] = raw.split('-');
  const monthIndex = parseInt(month ?? '0', 10) - 1;
  const monthName = MONTH_NAMES[monthIndex] ?? month;
  return `${monthName} ${year}`;
}

export function initExperience(): void {
  const mount = document.getElementById('experience-timeline');
  if (!mount) return;

  const sectionEl = document.getElementById('experience');
  if (sectionEl) {
    sectionEl.className = 'py-(--spacing-section) px-6 md:px-12 lg:px-24 max-w-6xl mx-auto';
  }

  mount.innerHTML = `
    <!-- Section heading -->
    <div class="mb-12 fade-in-up">
      <p class="text-sm font-mono tracking-widest uppercase text-accent mb-3">
        05 / Experience
      </p>
      <h2 id="experience-heading"
          class="font-display text-3xl md:text-4xl font-bold text-text">
        Career Journey
      </h2>
    </div>

    <!-- Timeline -->
    <div class="timeline-line pl-8 md:pl-10 space-y-12 stagger-children"
         role="list"
         aria-label="Career timeline">
      ${experience.map((entry) => `
        <article class="relative" role="listitem">
          <!-- Node marker -->
          <span class="absolute -left-8 md:-left-10 top-1.5 flex items-center justify-center"
                aria-hidden="true">
            <span class="w-4 h-4 rounded-full bg-accent ring-4 ring-background"></span>
          </span>

          <!-- Content -->
          <div>
            <h3 class="font-display text-xl md:text-2xl font-bold text-text leading-tight">
              ${entry.role}
            </h3>
            <p class="text-accent font-medium mt-1">
              ${entry.company}
            </p>
            <p class="text-muted text-sm mt-1 flex flex-wrap items-center gap-x-2">
              <span>${entry.location}</span>
              <span aria-hidden="true">·</span>
              <span>${formatDate(entry.startDate)} – ${formatDate(entry.endDate)}</span>
            </p>

            <!-- Highlights -->
            ${entry.highlights.length > 0 ? `
              <ul class="mt-4 space-y-2 text-sm text-text/80 list-none">
                ${entry.highlights.map((h) => `
                  <li class="flex items-start gap-2">
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0"
                          aria-hidden="true"></span>
                    <span>${h}</span>
                  </li>
                `).join('')}
              </ul>
            ` : ''}

            <!-- Tech tags -->
            ${entry.techTags.length > 0 ? `
              <div class="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                ${entry.techTags.map((tag) => `
                  <span class="px-2.5 py-0.5 text-xs font-mono rounded-full
                               bg-accent/10 text-accent border border-accent/20">
                    ${tag}
                  </span>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </article>
      `).join('')}
    </div>
  `;
}
