import{b as a,h as n}from"./dom-BLx834TU.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("blog-list");if(t){if(!a||a.length===0){t.innerHTML='<p class="text-muted italic">No posts published yet.</p>';return}t.innerHTML=a.map(e=>n`
        <article class="p-6 rounded-card border border-border bg-surface hover:border-accent/50 transition-colors">
          <div class="flex items-center gap-3 text-sm text-muted mb-3 font-mono">
            <time datetime="${e.date}">${e.date}</time>
            <span>•</span>
            <span>${e.readTimeMin} min read</span>
            <span>•</span>
            <span class="text-accent-warm">${e.category}</span>
          </div>
          <h3 class="text-2xl font-bold font-display mb-3">
            <a href="${e.url}" class="hover:text-accent transition-colors">${e.title}</a>
          </h3>
          <p class="text-muted mb-4 line-clamp-2">${e.excerpt}</p>
          <div class="flex flex-wrap gap-2">
            ${e.tags.map(r=>n`<span class="text-xs bg-background border border-border px-2 py-1 rounded text-muted">#${r}</span>`).join("")}
          </div>
        </article>
      `).join("")}});
