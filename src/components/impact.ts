import { impactMetrics } from '@data/impact';
import { $ } from '@utils/dom';

export function initImpact(): void {
  const section = $<HTMLElement>('#impact');
  if (!section) return;

  const metricCards = impactMetrics
    .map(
      (metric) => `
      <div class="flex flex-col items-center text-center gap-3 rounded-card border border-border bg-surface p-6">
        <div class="text-accent">${metric.icon}</div>
        <span class="font-display text-3xl font-bold text-accent">${metric.value}</span>
        <span class="font-body text-sm font-medium text-text">${metric.label}</span>
        <p class="text-xs leading-relaxed text-muted">${metric.description}</p>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="mx-auto max-w-7xl px-6 py-section">
      <div class="mb-12">
        <p class="mb-2 font-mono text-sm tracking-wider text-accent">01 / Impact</p>
        <h2 id="impact-heading" class="font-display text-3xl font-bold text-text md:text-4xl">
          Measurable Outcomes
        </h2>
      </div>
      <div class="stagger-children grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        ${metricCards}
      </div>
    </div>
  `;
}
