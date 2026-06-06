import { blogPosts } from '@data/blog';

export function initLatestWriting(): void {
  const mount = document.getElementById('writing-strip');
  if (!mount) return;

  const sectionEl = document.getElementById('latest-writing');
  if (sectionEl) {
    sectionEl.className = 'py-(--spacing-section) px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto';
  }

  // Get up to 2 latest posts
  const recentPosts = blogPosts.slice(0, 2);

  let postsHtml = '';
  
  if (recentPosts.length === 0) {
    postsHtml = `
      <p class="text-muted text-base md:text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
        Blog posts coming soon. Stay tuned for technical writing on cybersecurity,
        automation, and AI agents.
      </p>
    `;
  } else {
    postsHtml = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
        ${recentPosts.map(post => `
          <article class="card-hover p-6 rounded-[var(--radius-card)] border border-border bg-surface flex flex-col h-full fade-in-up">
            <div class="flex items-center gap-3 text-xs text-muted mb-3 font-mono">
              <time datetime="${post.date}">${post.date}</time>
              <span>•</span>
              <span class="text-accent-warm">${post.category}</span>
            </div>
            <h3 class="text-xl font-bold font-display mb-3 text-text">
              <a href="${post.url}" class="hover:text-accent transition-colors duration-200">
                ${post.title}
              </a>
            </h3>
            <p class="text-muted text-sm flex-grow line-clamp-3 mb-4">
              ${post.excerpt}
            </p>
            <div class="mt-auto pt-4 border-t border-border/50">
              <a href="${post.url}" class="text-sm font-semibold text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors duration-200">
                Read article
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }

  mount.innerHTML = `
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

      ${postsHtml}

      <!-- "View all posts" link -->
      <div class="fade-in-up">
        <a href="/blog/"
           class="inline-flex items-center gap-2 ${recentPosts.length === 0 ? 'text-muted/50 cursor-not-allowed pointer-events-none' : 'text-text hover:text-accent'} font-medium text-sm transition-colors duration-200">
          <span>View all posts</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  `;
}
