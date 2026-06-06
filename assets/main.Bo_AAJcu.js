import{$ as s,b as w,a as p}from"./dom-BLx834TU.js";const b="lutfisan-theme";function h(){try{const e=localStorage.getItem(b);if(e==="dark"||e==="light")return e}catch{}return null}function y(){return window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function d(e){const t=document.documentElement;e==="light"?t.classList.add("light"):t.classList.remove("light");try{localStorage.setItem(b,e)}catch{}}function k(){return document.documentElement.classList.contains("light")?"light":"dark"}function x(){const t=k()==="dark"?"light":"dark";d(t),u(t)}function u(e){const t=document.getElementById("theme-toggle");t&&(e==="light"?(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',t.setAttribute("aria-label","Switch to dark mode")):(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"/></svg>',t.setAttribute("aria-label","Switch to light mode")))}function A(){const t=h()??y();d(t),u(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",i=>{h()||(d(i.matches?"light":"dark"),u(i.matches?"light":"dark"))})}const m=[{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Certifications",href:"#certifications"},{label:"Blog",href:"/blog/"},{label:"Contact",href:"#contact"}];function M(){return`
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
            ${m.map(t=>{const i=t.label==="Blog",n=i?"":" data-nav-link",r=i?' target="_self"':"";return`<a href="${t.href}"${n}${r}
      class="relative text-muted hover:text-text transition-colors duration-200 text-sm font-medium
             after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-accent
             after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >${t.label}</a>`}).join(`
            `)}
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
          ${m.map((t,i)=>{const r=t.label==="Blog"?"":" data-nav-link";return`<a href="${t.href}"${r}
              class="text-2xl font-display font-semibold text-text hover:text-accent transition-colors duration-200"
              style="transition-delay: ${i*60}ms"
            >${t.label}</a>`}).join(`
          `)}

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
  `}function S(e){let i=!1;const n=()=>{i||(requestAnimationFrame(()=>{window.scrollY>10?e.querySelector("nav")?.classList.add("nav-scrolled"):e.querySelector("nav")?.classList.remove("nav-scrolled"),i=!1}),i=!0)};window.addEventListener("scroll",n,{passive:!0}),n()}function C(){const e=s("#mobile-menu-toggle"),t=s("#mobile-menu"),i=s("#hamburger-icon"),n=s("#close-icon");if(!e||!t||!i||!n)return;let r=!1;const c=()=>{r=!0,t.classList.remove("hidden","mobile-menu-exit"),t.classList.add("mobile-menu-enter"),i.classList.add("hidden"),n.classList.remove("hidden"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Close navigation menu"),document.body.style.overflow="hidden";const a=t.querySelector(".stagger-children");a&&a.classList.add("visible")},l=()=>{r=!1,t.classList.remove("mobile-menu-enter"),t.classList.add("mobile-menu-exit"),i.classList.remove("hidden"),n.classList.add("hidden"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Open navigation menu"),document.body.style.overflow="";const a=t.querySelector(".stagger-children");a&&a.classList.remove("visible"),t.addEventListener("animationend",()=>{r||(t.classList.add("hidden"),t.classList.remove("mobile-menu-exit"))},{once:!0})};e.addEventListener("click",()=>{r?l():c()}),t.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{l()})}),document.addEventListener("keydown",a=>{a.key==="Escape"&&r&&(l(),e.focus())})}function I(){const e=s("#theme-toggle"),t=s("#theme-toggle-mobile");e?.addEventListener("click",x),t?.addEventListener("click",x)}function $(){const e=s("#site-header");e&&(e.innerHTML=M(),S(e),C(),I())}const o={name:"Muhammad Lutfi Santoso",location:"Jakarta, Indonesia",tagline:"I secure and automate large-scale infrastructure by combining PAM, network security, operational visibility, and practical engineering.",email:"lutfisan@proton.me",github:"https://github.com/lutfisan",linkedin:"https://www.linkedin.com/in/lutfisan/"},g=["Network Security Manager","CyberArk PAM / IAM Specialist","Security Automation Builder","Mission-Critical Infrastructure Operator","AI-Agent Systems Explorer"],L=["CyberArk PAM / IAM Specialist","Network Security Engineer","Automation & Scripting","Mission-Critical Infrastructure"],T=3e3;function E(){const e=L.map(t=>`<span class="pill-badge inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full
                    border border-border text-muted bg-surface hover:text-accent transition-colors duration-200">
        ${t}
      </span>`).join(`
          `);return`
    <div class="hero-grid-bg min-h-screen flex items-center relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <!-- Left column: content -->
          <div class="flex flex-col gap-6 fade-in-up">

            <!-- Eyebrow -->
            <div class="flex items-center gap-2 text-sm text-muted">
              <span class="status-dot inline-block w-2 h-2 rounded-full bg-success"></span>
              <span>${o.location} · Cybersecurity · Network Security · Automation</span>
            </div>

            <!-- Heading -->
            <h1 id="hero-heading" class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-tight">
              ${o.name}
            </h1>

            <!-- Rotating subtitle -->
            <div class="h-8 sm:h-9 relative overflow-hidden" aria-live="polite" aria-atomic="true">
              <p id="hero-subtitle" class="text-lg sm:text-xl font-semibold text-accent title-enter">
                ${g[0]}
              </p>
            </div>

            <!-- Tagline -->
            <p class="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              ${o.tagline}
            </p>

            <!-- Role badges -->
            <div class="flex flex-wrap gap-2">
              ${e}
            </div>

            <!-- CTA buttons -->
            <div class="flex flex-wrap items-center gap-4 mt-2">
              <a href="#projects"
                class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg
                       bg-accent text-background hover:bg-accent/90 transition-colors duration-200
                       focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                View Projects
              </a>
              <a href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg
                       border border-border text-text hover:border-accent hover:text-accent
                       transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Get in Touch
              </a>
            </div>

            <!-- Social links -->
            <div class="flex items-center gap-4 mt-2">
              <a href="${o.github}" target="_blank" rel="noopener noreferrer"
                class="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-raised transition-colors duration-200"
                aria-label="GitHub profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="${o.linkedin}" target="_blank" rel="noopener noreferrer"
                class="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-raised transition-colors duration-200"
                aria-label="LinkedIn profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:${o.email}"
                class="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-raised transition-colors duration-200"
                aria-label="Send email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right column: hero shield image -->
          <div class="hidden lg:flex items-center justify-center relative">
            <div class="relative">
              <!-- Subtle glow behind image -->
              <div class="absolute inset-0 rounded-full bg-accent/10 blur-3xl scale-75" aria-hidden="true"></div>
              <img
                src="/assets/hero-shield.png"
                alt="Cybersecurity shield illustration"
                class="relative w-80 h-80 xl:w-96 xl:h-96 object-contain drop-shadow-lg"
                loading="eager"
                width="384"
                height="384"
              />
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted" aria-hidden="true">
        <span class="text-xs tracking-widest uppercase">Scroll</span>
        <div class="scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </div>
  `}function P(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=s("#hero-subtitle");if(!t)return;let i=0;setInterval(()=>{t.classList.remove("title-enter"),t.classList.add("title-exit"),setTimeout(()=>{i=(i+1)%g.length,t.textContent=g[i]??"",t.classList.remove("title-exit"),t.classList.add("title-enter")},500)},T)}function B(){const e=s("#hero");e&&(e.innerHTML=E(),P())}const j=[{value:"100,000+",label:"Mission-critical devices",description:"Supported CyberArk integration context across large-scale device environments.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'},{value:"1,000+",label:"Critical systems supported",description:"Worked across large infrastructure estates requiring reliable operational control.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>'},{value:"24h → <15m",label:"Workflow acceleration",description:"Reduced multivendor configuration processing time through automation.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'},{value:"80%",label:"Manual effort reduced",description:"Automated router-data processing workflows to reduce repetitive manual work.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'},{value:"15-min",label:"Operational visibility",description:"Improved reporting cadence toward near-real-time operational awareness.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'},{value:"30%",label:"IPAM efficiency gain",description:"Built IPAM-style workflows that improved operational efficiency.",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'}];function H(){const e=s("#impact");if(!e)return;const t=j.map(i=>`
      <div class="flex flex-col items-center text-center gap-3 rounded-card border border-border bg-surface p-6">
        <div class="text-accent">${i.icon}</div>
        <span class="font-display text-3xl font-bold text-accent">${i.value}</span>
        <span class="font-body text-sm font-medium text-text">${i.label}</span>
        <p class="text-xs leading-relaxed text-muted">${i.description}</p>
      </div>`).join("");e.innerHTML=`
    <div class="mx-auto max-w-7xl px-6 py-section">
      <div class="mb-12">
        <p class="mb-2 font-mono text-sm tracking-wider text-accent">01 / Impact</p>
        <h2 id="impact-heading" class="font-display text-3xl font-bold text-text md:text-4xl">
          Measurable Outcomes
        </h2>
      </div>
      <div class="stagger-children grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        ${t}
      </div>
    </div>
  `}const f={paragraphs:["I am a cybersecurity and network security professional based in Jakarta, Indonesia, with experience across PAM/IAM, CyberArk operations, network security architecture, SIEM/log ingestion, incident response, and vulnerability governance.","My work focuses on making mission-critical infrastructure more secure, observable, and efficient. I have supported large-scale environments involving thousands of systems and high-volume operational data, while building automation that reduces manual effort and improves reporting speed.","I am currently focused on security automation, privileged access governance, infrastructure visibility, and practical AI-agent workflows that help technical teams work faster without weakening control, auditability, or security."],stats:[{icon:"briefcase",label:"6+ Years Experience"},{icon:"map-pin",label:"Based in Jakarta, ID"},{icon:"shield",label:"Cybersecurity & Network Security"},{icon:"users",label:"Open to Strategic Collaboration"}]},N={briefcase:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',shield:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',users:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'};function R(){const e=s("#about");if(!e)return;const t=f.paragraphs.map(n=>`<p class="text-base leading-relaxed text-muted md:text-lg">${n}</p>`).join(""),i=f.stats.map(n=>`
      <div class="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted">
        <span class="text-accent">${N[n.icon]??""}</span>
        <span>${n.label}</span>
      </div>`).join("");e.innerHTML=`
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
            ${i}
          </div>
        </div>

        <!-- Right column: Bio paragraphs -->
        <div class="flex flex-col gap-5">
          ${t}
        </div>
      </div>
    </div>
  `}const O=[{id:"security-pam",label:"Security, PAM & IAM",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',items:["CyberArk PAM","Privileged Access Management","Identity & Access Management","Zero Trust","PKI","SIEM / Log Ingestion","Incident Response","Vulnerability Governance","Patch Governance","ISO 27001 Awareness"]},{id:"network-infra",label:"Network Security & Infrastructure",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',items:["Network Security Architecture","Firewall / Routing / Switching","ESXi","NMS Platforms","LibreNMS","NEC iPasoLink","SNMP","gNMI","Network Telemetry"]},{id:"automation",label:"Automation & Data Processing",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',items:["Python","Nornir","Netmiko","Ansible-style Automation","CSV / Excel Processing","API Integration","Reporting Automation","Tableau","Power BI"]},{id:"software",label:"Software & Systems Engineering",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',items:["TypeScript","Go","REST APIs","GitHub Actions","Docker","Linux / systemd","Secure Scripting","Logging & Error Handling"]},{id:"ai-agents",label:"AI Agents & Knowledge Systems",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z"/><circle cx="12" cy="6" r="1"/></svg>',items:["AI-Agent Orchestration","Hermes Agent","Prompt Engineering","Obsidian / Second-Brain Workflows","Finance & Coding Assistant Workflows","Retrieval-style Knowledge Management"]}];function _(e){const t=e.items.map(i=>`
        <span
          class="pill-badge inline-flex items-center px-3 py-1 rounded-full text-xs font-mono
                 bg-surface border border-border text-accent"
        >${i}</span>`).join("");return`
    <div class="bg-surface border border-border rounded-[var(--radius-card)] p-6">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-accent" aria-hidden="true">${e.icon}</span>
        <h3 class="font-display text-lg font-semibold text-text">${e.label}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        ${t}
      </div>
    </div>`}function V(){const e=s("#skills");if(!e)return;const t=`
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
        ${O.map(_).join("")}
      </div>
    </div>`;e.innerHTML=t}const z=[{id:"cybarbot",name:"CybArBot",category:"PAM Tooling",description:"ChatOps assistant for CyberArk PAM operations. Automates user management, access auditing, and credential lifecycle tasks via Telegram bot interface.",architectureHighlights:["Go-based Telegram bot with CyberArk REST API integration","Async session management with secure credential handling","Role-based access control for bot commands","Automated safe/account provisioning workflows","Audit trail logging for all PAM operations"],techStack:["Go","CyberArk REST API","Telegram Bot API","Docker","Linux"],status:"active-dev",featured:!0,links:{github:"https://github.com/lutfisan"}},{id:"cyberark-auditor",name:"CyberArk PAS REST Auditor",category:"Security Tooling",description:"Audits and detects risky configurations in CyberArk PAS via REST APIs. Maps IP addresses to accessible users and identifies privilege escalation paths.",architectureHighlights:["Async Python with aiohttp for high-throughput API calls","IP-to-user access mapping across enterprise vault","Proxy-aware session management with retry logic","CSV/Excel export for compliance reporting","Handles 401/proxy edge cases gracefully"],techStack:["Python","aiohttp","CyberArk REST API","pandas","asyncio"],status:"active-dev",featured:!0,links:{github:"https://github.com/lutfisan"}},{id:"hyperscale-nms",name:"Hyperscale Telemetry NMS",category:"Network Monitoring",description:"Telemetry-driven network monitoring system for large-scale infrastructure. Designed for high-volume SNMP/gNMI ingestion and operational dashboards.",architectureHighlights:["SNMP and gNMI telemetry ingestion pipeline","Time-series database for network metrics","Real-time operational dashboards","Alerting and anomaly detection rules","Multi-vendor device support at scale"],techStack:["Python","gNMI","SNMP","InfluxDB","Grafana"],status:"concept-prd",featured:!0,links:{}},{id:"openclaw",name:"OpenClaw AI Agents",category:"AI Infrastructure",description:"AI agent orchestration framework for practical workflows. Coordinates multiple specialized agents for coding, research, and operational tasks.",architectureHighlights:["Multi-agent orchestration with task routing","Tool-use patterns for code generation and analysis","Knowledge retrieval from structured data sources","Configurable agent personas and capabilities","Integration with local and cloud LLM providers"],techStack:["Python","TypeScript","LLM APIs","Vector DB","Docker"],status:"active-dev",featured:!1,links:{github:"https://github.com/lutfisan"}},{id:"axiom-portfolio",name:"Axiom Portfolio Agent",category:"AI Agent / Finance",description:"AI-powered portfolio analysis agent for personal finance. Processes market data, generates insights, and supports investment decision workflows.",architectureHighlights:["Real-time market data ingestion and processing","LLM-powered analysis with structured output","Portfolio tracking and performance metrics","Risk assessment and allocation suggestions","Automated reporting and alerts"],techStack:["Python","LLM APIs","pandas","Market APIs","SQLite"],status:"active-dev",featured:!1,links:{github:"https://github.com/lutfisan"}},{id:"cybershield-id",name:"CyberShield Indonesia",category:"Cybersec Education",description:"Cybersecurity education platform concept for Indonesian professionals. Focuses on practical PAM, network security, and automation training content.",architectureHighlights:["Structured learning paths for cybersecurity professionals","Hands-on lab scenarios for PAM and network security","Indonesian-language content for local accessibility","Community-driven knowledge sharing","Integration with certification preparation materials"],techStack:["TypeScript","Markdown","GitHub Pages","Vite"],status:"concept-prd",featured:!1,links:{}}],D={production:"Production","active-dev":"Active Dev","concept-prd":"Concept / PRD"},G={production:"var(--color-success)","active-dev":"var(--color-warning)","concept-prd":"var(--color-muted)"},F='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>';function W(e){return e.length===0?"":`
    <ul class="mt-3 space-y-1 list-disc list-inside" role="list">
      ${e.map(i=>`<li class="text-muted text-sm leading-relaxed">${i}</li>`).join("")}
    </ul>`}function q(e){return e.map(t=>`
        <span
          class="inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-mono
                 border border-border text-muted"
        >${t}</span>`).join("")}function J(e){return e.links.github?`
    <a
      href="${e.links.github}"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
      aria-label="View ${e.name} on GitHub"
    >
      ${F}
    </a>`:""}function K(e){const t=G[e];return`
    <span
      class="inline-flex items-center gap-1.5 text-xs font-mono"
      style="color: ${t}"
    >
      <span
        class="w-1.5 h-1.5 rounded-full inline-block"
        style="background-color: ${t}"
        aria-hidden="true"
      ></span>
      ${D[e]}
    </span>`}function Y(e){return`
    <article
      class="card-hover bg-surface border border-border rounded-[var(--radius-card)]
             p-6 flex flex-col gap-4"
      aria-label="${e.name}"
    >
      <!-- Category badge -->
      <span class="self-start text-xs font-mono tracking-wider uppercase text-accent-warm">
        ${e.category}
      </span>

      <!-- Project name -->
      <h3 class="font-display text-xl font-bold text-text leading-tight">
        ${e.name}
      </h3>

      <!-- Description -->
      <p class="text-muted text-sm leading-relaxed">
        ${e.description}
      </p>

      <!-- Architecture highlights (featured projects) -->
      ${e.featured?W(e.architectureHighlights):""}

      <!-- Tech stack -->
      <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
        ${q(e.techStack)}
      </div>

      <!-- Footer: status + links -->
      <div class="flex items-center justify-between pt-2 border-t border-border">
        ${K(e.status)}
        ${J(e)}
      </div>
    </article>`}function U(){const e=s("#projects"),t=s("#projects-grid");if(!e||!t)return;const i=document.createElement("div");i.className="max-w-7xl mx-auto px-6 pt-(--spacing-section)",i.innerHTML=`
    <div class="mb-12 fade-in-up">
      <p class="text-sm font-mono tracking-widest uppercase text-accent mb-2">04 / Projects</p>
      <h2 id="projects-heading" class="font-display text-3xl md:text-4xl font-bold text-text">
        Featured Projects
      </h2>
    </div>`,e.insertBefore(i,t),t.className="max-w-7xl mx-auto px-6 pb-(--spacing-section) grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children",t.innerHTML=z.map(Y).join("")}const X=[{id:"huawei-nsm",role:"Network Security Manager",company:"Huawei",location:"Jakarta, Indonesia",startDate:"2019-07",endDate:"present",highlights:["Managed network security operations and governance across mission-critical infrastructure environments.","Supported CyberArk PAM integration and privileged access workflows across large-scale device estates.","Improved configuration and reporting workflows through Python-based automation, reducing multivendor processing time from approximately 24 hours to under 15 minutes.","Automated large router-data processing activities, reducing manual workload by approximately 80%.","Supported vulnerability governance, patch coordination, SIEM/log ingestion, and incident-response activities across operational teams."],techTags:["CyberArk PAM","Python","Network Security","SIEM","Automation"]}],Z=["January","February","March","April","May","June","July","August","September","October","November","December"];function v(e){if(e.toLowerCase()==="present")return"Present";const[t,i]=e.split("-"),n=parseInt(i??"0",10)-1;return`${Z[n]??i} ${t}`}function Q(){const e=document.getElementById("experience-timeline");if(!e)return;const t=document.getElementById("experience");t&&(t.className="py-(--spacing-section) px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"),e.innerHTML=`
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
      ${X.map(i=>`
        <article class="relative" role="listitem">
          <!-- Node marker -->
          <span class="absolute -left-8 md:-left-10 top-1.5 flex items-center justify-center"
                aria-hidden="true">
            <span class="w-4 h-4 rounded-full bg-accent ring-4 ring-background"></span>
          </span>

          <!-- Content -->
          <div>
            <h3 class="font-display text-xl md:text-2xl font-bold text-text leading-tight">
              ${i.role}
            </h3>
            <p class="text-accent font-medium mt-1">
              ${i.company}
            </p>
            <p class="text-muted text-sm mt-1 flex flex-wrap items-center gap-x-2">
              <span>${i.location}</span>
              <span aria-hidden="true">·</span>
              <span>${v(i.startDate)} – ${v(i.endDate)}</span>
            </p>

            <!-- Highlights -->
            ${i.highlights.length>0?`
              <ul class="mt-4 space-y-2 text-sm text-text/80 list-none">
                ${i.highlights.map(n=>`
                  <li class="flex items-start gap-2">
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0"
                          aria-hidden="true"></span>
                    <span>${n}</span>
                  </li>
                `).join("")}
              </ul>
            `:""}

            <!-- Tech tags -->
            ${i.techTags.length>0?`
              <div class="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                ${i.techTags.map(n=>`
                  <span class="px-2.5 py-0.5 text-xs font-mono rounded-full
                               bg-accent/10 text-accent border border-accent/20">
                    ${n}
                  </span>
                `).join("")}
              </div>
            `:""}
          </div>
        </article>
      `).join("")}
    </div>
  `}const ee=[{name:"HCIA IoT",issuer:"Huawei",category:"IoT"},{name:"HCIA Security",issuer:"Huawei",category:"Security"},{name:"Microsoft Certified: Azure Fundamentals",issuer:"Microsoft",url:"https://www.credly.com/badges/956a4498-6df9-446f-b069-32ed0fe1b2d8/public_url",category:"Cloud"},{name:"AWS Certified Cloud Practitioner",issuer:"Amazon Web Services",url:"https://www.credly.com/badges/3e0c62f3-8bba-4c22-b19b-c1e606d08ba4/public_url",category:"Cloud"},{name:"Google AI Essentials",issuer:"Google / Coursera",url:"https://www.coursera.org/account/accomplishments/specialization/BS89XSFM0PLZ",category:"AI"},{name:"Cisco DevNet Associate",issuer:"Cisco",url:"https://www.credly.com/badges/08572150-a887-49b8-9c51-6f4d7c355b43/linked_in_profile",category:"Automation"},{name:"CCNA",issuer:"Cisco",url:"https://www.credly.com/badges/fd78aa61-0e8b-4dca-b3c7-797839fb4733?source=linked_in_profile",category:"Networking"},{name:"CCNA Cybersecurity Operations",issuer:"Cisco",url:"https://www.credly.com/badges/ad5fb410-2ca9-4178-a550-ef50aade5825/public_url",category:"Security"},{name:"CCNA Automation",issuer:"Cisco",url:"https://www.credly.com/badges/08572150-a887-49b8-9c51-6f4d7c355b43/public_url",category:"Automation"},{name:"Data Science Foundations",issuer:"IBM / Credly",url:"https://www.credly.com/badges/06337717-d185-4644-a01f-17a256fcb67f/public_url",category:"Data"}],te={Security:{bg:"bg-[#38bdf8]/10",text:"text-[#38bdf8]",border:"border-[#38bdf8]/20"},Cloud:{bg:"bg-blue-500/10",text:"text-blue-400",border:"border-blue-500/20"},Networking:{bg:"bg-success/10",text:"text-success",border:"border-success/20"},Automation:{bg:"bg-accent-warm/10",text:"text-accent-warm",border:"border-accent-warm/20"},Data:{bg:"bg-[#a78bfa]/10",text:"text-[#a78bfa]",border:"border-[#a78bfa]/20"},AI:{bg:"bg-[#f472b6]/10",text:"text-[#f472b6]",border:"border-[#f472b6]/20"},IoT:{bg:"bg-[#2dd4bf]/10",text:"text-[#2dd4bf]",border:"border-[#2dd4bf]/20"}},ie=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>`;function ne(){const e=document.getElementById("certifications-grid");if(!e)return;const t=document.getElementById("certifications");t&&(t.className="py-(--spacing-section) px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"),e.innerHTML=`
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
      ${ee.map(i=>{const n=te[i.category],r=!!i.url,c=r?"a":"div",l=r?`href="${i.url}" target="_blank" rel="noopener noreferrer" aria-label="${i.name} credential (opens in new tab)"`:"";return`
          <${c} ${l}
            class="group card-hover rounded-(--radius-card) border border-border
                   bg-surface p-4 flex flex-col gap-3
                   ${r?"cursor-pointer":""}">
            <!-- Cert name + link icon -->
            <div class="flex items-start justify-between gap-2">
              <h3 class="font-display text-sm font-bold text-text leading-snug">
                ${i.name}
              </h3>
              ${r?ie:""}
            </div>

            <!-- Issuer -->
            <p class="text-xs text-muted leading-snug">${i.issuer}</p>

            <!-- Category badge -->
            <span class="mt-auto inline-flex self-start px-2 py-0.5 text-[10px] font-mono
                         font-medium rounded-full border
                         ${n.bg} ${n.text} ${n.border}">
              ${i.category}
            </span>
          </${c}>
        `}).join("")}
    </div>
  `}function re(){const e=document.getElementById("writing-strip");if(!e)return;const t=document.getElementById("latest-writing");t&&(t.className="py-(--spacing-section) px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto");const i=w.slice(0,2);let n="";i.length===0?n=`
      <p class="text-muted text-base md:text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
        Blog posts coming soon. Stay tuned for technical writing on cybersecurity,
        automation, and AI agents.
      </p>
    `:n=`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
        ${i.map(r=>`
          <article class="card-hover p-6 rounded-[var(--radius-card)] border border-border bg-surface flex flex-col h-full fade-in-up">
            <div class="flex items-center gap-3 text-xs text-muted mb-3 font-mono">
              <time datetime="${r.date}">${r.date}</time>
              <span>•</span>
              <span class="text-accent-warm">${r.category}</span>
            </div>
            <h3 class="text-xl font-bold font-display mb-3 text-text">
              <a href="${r.url}" class="hover:text-accent transition-colors duration-200">
                ${r.title}
              </a>
            </h3>
            <p class="text-muted text-sm flex-grow line-clamp-3 mb-4">
              ${r.excerpt}
            </p>
            <div class="mt-auto pt-4 border-t border-border/50">
              <a href="${r.url}" class="text-sm font-semibold text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors duration-200">
                Read article
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </article>
        `).join("")}
      </div>
    `,e.innerHTML=`
    <div class="text-center w-full">
      <!-- Section heading -->
      <div class="fade-in-up mb-12">
        <p class="text-sm font-mono tracking-widest uppercase text-accent mb-3">
          07 / Writing
        </p>
        <h2 id="latest-writing-heading"
            class="font-display text-3xl md:text-4xl font-bold text-text">
          Latest Writing
        </h2>
      </div>

      ${n}

      <!-- "View all posts" link -->
      <div class="fade-in-up">
        <a href="/blog/"
           class="inline-flex items-center gap-2 ${i.length===0?"text-muted/50 cursor-not-allowed pointer-events-none":"text-text hover:text-accent"} font-medium text-sm transition-colors duration-200">
          <span>View all posts</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  `}const oe='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',se='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',ae='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';function le(){const e=document.getElementById("contact");e&&(e.innerHTML=`
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
          href="mailto:${o.email}"
          class="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-background font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-glow mb-10"
          aria-label="Send an email to ${o.name}"
        >
          ${oe}
          Send an Email
        </a>

        <!-- Secondary links row -->
        <div class="flex items-center justify-center gap-8 mb-10">
          <a
            href="${o.linkedin}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
            aria-label="Visit LinkedIn profile"
          >
            ${se}
            <span class="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="${o.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200"
            aria-label="Visit GitHub profile"
          >
            ${ae}
            <span class="text-sm font-medium">GitHub</span>
          </a>
        </div>

        <!-- Location note -->
        <p class="text-muted text-sm">
          ${o.location} — open to remote, hybrid, and strategic collaboration.
        </p>
      </div>
    </div>
  `)}const ce='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',de='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',ue='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';function ge(){const e=document.getElementById("site-footer");e&&(e.innerHTML=`
    <div class="border-t border-border">
      <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Left side -->
        <div class="text-center sm:text-left">
          <p class="text-muted text-sm">
            &copy; ${new Date().getFullYear()} ${o.name}
          </p>
          <p class="text-muted/60 text-xs mt-1">
            Built with TypeScript + Vite + Tailwind CSS v4
          </p>
        </div>

        <!-- Right side: social icons -->
        <nav class="flex items-center gap-4" aria-label="Footer social links">
          <a
            href="${o.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            ${ce}
          </a>
          <a
            href="${o.linkedin}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            ${de}
          </a>
          <a
            href="mailto:${o.email}"
            class="text-muted hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            ${ue}
          </a>
        </nav>
      </div>
    </div>
  `)}function pe(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.querySelectorAll(".fade-in-up, .stagger-children").forEach(i=>{i.classList.add("visible")});return}const t=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),t.unobserve(n.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".fade-in-up, .stagger-children").forEach(i=>{t.observe(i)})}function he(){const e=p("section[id]"),t=p("a[data-nav-link]");if(e.length===0||t.length===0)return;const i=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const c=r.target.id;t.forEach(l=>{l.getAttribute("href")===`#${c}`?l.classList.add("nav-link-active"):l.classList.remove("nav-link-active")})}})},{threshold:.2,rootMargin:"-80px 0px -50% 0px"});e.forEach(n=>{i.observe(n)})}document.addEventListener("DOMContentLoaded",()=>{A(),$(),B(),H(),R(),V(),U(),Q(),ne(),re(),le(),ge(),requestAnimationFrame(()=>{pe(),he()})});
