import { $ } from '@utils/dom';
import { projects, type Project, type ProjectStatus } from '@data/projects';

const STATUS_LABEL: Record<ProjectStatus, string> = {
  'production': 'Production',
  'active-dev': 'Active Dev',
  'concept-prd': 'Concept / PRD',
};

const STATUS_COLOR: Record<ProjectStatus, string> = {
  'production': 'var(--color-success)',
  'active-dev': 'var(--color-warning)',
  'concept-prd': 'var(--color-muted)',
};

const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;

function renderArchitectureHighlights(highlights: string[]): string {
  if (highlights.length === 0) return '';

  const items = highlights
    .map((h) => `<li class="text-muted text-sm leading-relaxed">${h}</li>`)
    .join('');

  return `
    <ul class="mt-3 space-y-1 list-disc list-inside" role="list">
      ${items}
    </ul>`;
}

function renderTechStack(stack: string[]): string {
  return stack
    .map(
      (tech) => `
        <span
          class="inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-mono
                 border border-border text-muted"
        >${tech}</span>`,
    )
    .join('');
}

function renderLinks(project: Project): string {
  if (!project.links.github) return '';

  return `
    <a
      href="${project.links.github}"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
      aria-label="View ${project.name} on GitHub"
    >
      ${githubIcon}
    </a>`;
}

function renderStatusBadge(status: ProjectStatus): string {
  const color = STATUS_COLOR[status];

  return `
    <span
      class="inline-flex items-center gap-1.5 text-xs font-mono"
      style="color: ${color}"
    >
      <span
        class="w-1.5 h-1.5 rounded-full inline-block"
        style="background-color: ${color}"
        aria-hidden="true"
      ></span>
      ${STATUS_LABEL[status]}
    </span>`;
}

function renderProjectCard(project: Project): string {
  return `
    <article
      class="card-hover bg-surface border border-border rounded-[var(--radius-card)]
             p-6 flex flex-col gap-4"
      aria-label="${project.name}"
    >
      <!-- Category badge -->
      <span class="self-start text-xs font-mono tracking-wider uppercase text-accent-warm">
        ${project.category}
      </span>

      <!-- Project name -->
      <h3 class="font-display text-xl font-bold text-text leading-tight">
        ${project.name}
      </h3>

      <!-- Description -->
      <p class="text-muted text-sm leading-relaxed">
        ${project.description}
      </p>

      <!-- Architecture highlights (featured projects) -->
      ${project.featured ? renderArchitectureHighlights(project.architectureHighlights) : ''}

      <!-- Tech stack -->
      <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
        ${renderTechStack(project.techStack)}
      </div>

      <!-- Footer: status + links -->
      <div class="flex items-center justify-between pt-2 border-t border-border">
        ${renderStatusBadge(project.status)}
        ${renderLinks(project)}
      </div>
    </article>`;
}

export function initProjects(): void {
  const section = $<HTMLElement>('#projects');
  const grid = $<HTMLElement>('#projects-grid');
  if (!section || !grid) return;

  // Inject section heading into the section, before the grid
  const heading = document.createElement('div');
  heading.className = 'max-w-7xl mx-auto px-6 pt-(--spacing-section)';
  heading.innerHTML = `
    <div class="mb-12 fade-in-up">
      <p class="text-sm font-mono tracking-widest uppercase text-accent mb-2">04 / Projects</p>
      <h2 id="projects-heading" class="font-display text-3xl md:text-4xl font-bold text-text">
        Featured Projects
      </h2>
    </div>`;
  section.insertBefore(heading, grid);

  // Inject cards into the grid
  grid.className = 'max-w-7xl mx-auto px-6 pb-(--spacing-section) grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children';
  grid.innerHTML = projects.map(renderProjectCard).join('');
}
