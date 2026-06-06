import { $$ } from './dom';

export function initScrollspy(): void {
  const sections = $$<HTMLElement>('section[id]');
  const navLinks = $$<HTMLAnchorElement>('a[data-nav-link]');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('nav-link-active');
            } else {
              link.classList.remove('nav-link-active');
            }
          });
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '-80px 0px -50% 0px',
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}
