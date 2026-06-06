import { certifications, type CertCategory } from '@data/certifications';

const CATEGORY_COLORS: Record<CertCategory, { bg: string; text: string; border: string }> = {
  Security:   { bg: 'bg-[#38bdf8]/10', text: 'text-[#38bdf8]', border: 'border-[#38bdf8]/20' },
  Cloud:      { bg: 'bg-blue-500/10',  text: 'text-blue-400',  border: 'border-blue-500/20' },
  Networking: { bg: 'bg-success/10',    text: 'text-success',   border: 'border-success/20' },
  Automation: { bg: 'bg-accent-warm/10', text: 'text-accent-warm', border: 'border-accent-warm/20' },
  Data:       { bg: 'bg-[#a78bfa]/10', text: 'text-[#a78bfa]', border: 'border-[#a78bfa]/20' },
  AI:         { bg: 'bg-[#f472b6]/10', text: 'text-[#f472b6]', border: 'border-[#f472b6]/20' },
  IoT:        { bg: 'bg-[#2dd4bf]/10', text: 'text-[#2dd4bf]', border: 'border-[#2dd4bf]/20' },
};

const externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>`;

export function initCertifications(): void {
  const mount = document.getElementById('certifications-grid');
  if (!mount) return;

  const sectionEl = document.getElementById('certifications');
  if (sectionEl) {
    sectionEl.className = 'py-(--spacing-section) px-6 md:px-12 lg:px-24 max-w-6xl mx-auto';
  }

  mount.innerHTML = `
    <!-- Section heading -->
    <div class="mb-12 fade-in-up">
      <p class="text-sm font-mono tracking-widest uppercase text-accent mb-3">
        06 / Certifications
      </p>
      <h2 id="certifications-heading"
          class="font-display text-3xl md:text-4xl font-bold text-text">
        Credentials &amp; Certifications
      </h2>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 stagger-children">
      ${certifications.map((cert) => {
        const colors = CATEGORY_COLORS[cert.category];
        const isLink = !!cert.url;
        const Tag = isLink ? 'a' : 'div';
        const linkAttrs = isLink
          ? `href="${cert.url}" target="_blank" rel="noopener noreferrer" aria-label="${cert.name} credential (opens in new tab)"`
          : '';

        return `
          <${Tag} ${linkAttrs}
            class="group card-hover rounded-(--radius-card) border border-border
                   bg-surface p-4 flex flex-col gap-3
                   ${isLink ? 'cursor-pointer' : ''}">
            <!-- Cert name + link icon -->
            <div class="flex items-start justify-between gap-2">
              <h3 class="font-display text-sm font-bold text-text leading-snug">
                ${cert.name}
              </h3>
              ${isLink ? externalLinkIcon : ''}
            </div>

            <!-- Issuer -->
            <p class="text-xs text-muted leading-snug">${cert.issuer}</p>

            <!-- Category badge -->
            <span class="mt-auto inline-flex self-start px-2 py-0.5 text-[10px] font-mono
                         font-medium rounded-full border
                         ${colors.bg} ${colors.text} ${colors.border}">
              ${cert.category}
            </span>
          </${Tag}>
        `;
      }).join('')}
    </div>
  `;
}
