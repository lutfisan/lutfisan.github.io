import './styles/main.css';
import { initTheme } from './utils/theme';
import { initNav } from './components/nav';
import { initHero } from './components/hero';
import { initImpact } from './components/impact';
import { initAbout } from './components/about';
import { initSkills } from './components/skills';
import { initProjects } from './components/projects';
import { initExperience } from './components/experience';
import { initCertifications } from './components/certifications';
import { initLatestWriting } from './components/latest-writing';
import { initContact } from './components/contact';
import { initFooter } from './components/footer';
import { initAnimations } from './utils/animations';
import { initScrollspy } from './utils/scrollspy';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initHero();
  initImpact();
  initAbout();
  initSkills();
  initProjects();
  initExperience();
  initCertifications();
  initLatestWriting();
  initContact();
  initFooter();

  // Initialize animations and scrollspy after all content is rendered
  requestAnimationFrame(() => {
    initAnimations();
    initScrollspy();
  });
});
