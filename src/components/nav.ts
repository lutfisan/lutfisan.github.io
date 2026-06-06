import { toggleTheme } from '@utils/theme';
import { $ } from '@utils/dom';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '#contact' },
] as const;

function buildNavHTML(): string {
  const linksHTML = NAV_LINKS.map((link) => {
    const isBlog = link.label === 'Blog';
    const dataAttr = isBlog ? '' : ' data-nav-link';
    const target = isBlog ? ' target="_self"' : '';
    return `<a href="${link.href}"${dataAttr}${target}
      class="relative text-muted hover:text-text transition-colors duration-200 text-sm font-medium
             after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-accent
             after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >${link.label}</a>`;
  }).join('\n            ');

  return `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" role="navigation" aria-label="Main navigation">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">

          <!-- Logo -->
          <a href="/" class="flex items-center gap-1 font-mono text-lg font-bold tracking-tight text-text group" aria-label="Home">
            <span class="relative">
              MLS
              <span class="absolute -bottom-1 left-0 h-0.5 w-full bg-accent rounded-full"></span>
            </span>
          </a>

          <!-- Desktop nav links -->
          <div class="hidden lg:flex items-center gap-6">
            ${linksHTML}
          </div>

          <!-- Desktop CTA + Theme toggle -->
          <div class="hidden lg:flex items-center gap-3">
            <a href="#projects"
              class="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg
                     bg-accent text-background hover:bg-accent/90 transition-colors duration-200
                     focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              View Projects
            </a>
            <a href="#contact"
              class="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg
                     border border-border text-text hover:border-accent hover:text-accent
                     transition-colors duration-200">
              Get in Touch
            </a>
            <button
              id="theme-toggle"
              type="button"
              class="ml-2 p-2 rounded-lg text-muted hover:text-text hover:bg-surface-raised
                     transition-colors duration-200"
              aria-label="Switch to light mode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/>
              </svg>
            </button>
          </div>

          <!-- Mobile: theme toggle + hamburger -->
          <div class="flex lg:hidden items-center gap-2">
            <button
              id="theme-toggle-mobile"
              type="button"
              class="p-2 rounded-lg text-muted hover:text-text hover:bg-surface-raised
                     transition-colors duration-200"
              aria-label="Switch to light mode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/>
              </svg>
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              class="p-2 rounded-lg text-muted hover:text-text hover:bg-surface-raised
                     transition-colors duration-200"
              aria-label="Open navigation menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <svg id="hamburger-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <svg id="close-icon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu overlay -->
      <div
        id="mobile-menu"
        class="fixed inset-0 top-16 z-40 hidden bg-background/95 backdrop-blur-lg lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div class="flex flex-col items-center justify-center h-full gap-6 stagger-children">
          ${NAV_LINKS.map((link, i) => {
            const isBlog = link.label === 'Blog';
            const dataAttr = isBlog ? '' : ' data-nav-link';
            return `<a href="${link.href}"${dataAttr}
              class="text-2xl font-display font-semibold text-text hover:text-accent transition-colors duration-200"
              style="transition-delay: ${i * 60}ms"
            >${link.label}</a>`;
          }).join('\n          ')}

          <div class="flex flex-col items-center gap-4 mt-4">
            <a href="#projects"
              class="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg
                     bg-accent text-background hover:bg-accent/90 transition-colors duration-200">
              View Projects
            </a>
            <a href="#contact"
              class="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg
                     border border-border text-text hover:border-accent hover:text-accent
                     transition-colors duration-200">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function setupScrollListener(nav: HTMLElement): void {
  const SCROLL_THRESHOLD = 10;
  let ticking = false;

  const onScroll = (): void => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > SCROLL_THRESHOLD) {
          nav.querySelector('nav')?.classList.add('nav-scrolled');
        } else {
          nav.querySelector('nav')?.classList.remove('nav-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  // Run once on init in case page is already scrolled
  onScroll();
}

function setupMobileMenu(): void {
  const toggle = $<HTMLButtonElement>('#mobile-menu-toggle');
  const menu = $<HTMLElement>('#mobile-menu');
  const hamburgerIcon = $<SVGElement>('#hamburger-icon');
  const closeIcon = $<SVGElement>('#close-icon');

  if (!toggle || !menu || !hamburgerIcon || !closeIcon) return;

  let isOpen = false;

  const openMenu = (): void => {
    isOpen = true;
    menu.classList.remove('hidden', 'mobile-menu-exit');
    menu.classList.add('mobile-menu-enter');
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden';

    // Trigger stagger animation
    const staggerContainer = menu.querySelector('.stagger-children');
    if (staggerContainer) {
      staggerContainer.classList.add('visible');
    }
  };

  const closeMenu = (): void => {
    isOpen = false;
    menu.classList.remove('mobile-menu-enter');
    menu.classList.add('mobile-menu-exit');
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';

    const staggerContainer = menu.querySelector('.stagger-children');
    if (staggerContainer) {
      staggerContainer.classList.remove('visible');
    }

    // Hide after animation completes
    menu.addEventListener('animationend', () => {
      if (!isOpen) {
        menu.classList.add('hidden');
        menu.classList.remove('mobile-menu-exit');
      }
    }, { once: true });
  };

  toggle.addEventListener('click', () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close mobile menu when a link is clicked
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      toggle.focus();
    }
  });
}

function setupThemeToggle(): void {
  const toggleBtn = $<HTMLButtonElement>('#theme-toggle');
  const toggleBtnMobile = $<HTMLButtonElement>('#theme-toggle-mobile');

  toggleBtn?.addEventListener('click', toggleTheme);
  toggleBtnMobile?.addEventListener('click', toggleTheme);
}

export function initNav(): void {
  const header = $<HTMLElement>('#site-header');
  if (!header) return;

  header.innerHTML = buildNavHTML();

  setupScrollListener(header);
  setupMobileMenu();
  setupThemeToggle();
}
