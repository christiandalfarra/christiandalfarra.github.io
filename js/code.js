function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    const projectCardsHTML = projects.map(project => {
        const techTags = project.technologies.map(tech => `<span>${tech}</span>`).join('');
        
        const demoLink = project.demoUrl 
            ? `<a href="${project.demoUrl}" class="demo-link">${project.demoText || 'Demo'}</a>` 
            : '';

        return `
            <article class="project-card reveal">
                <div class="project-image">
                    <div class="placeholder-img"></div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${techTags}
                    </div>
                    <div class="project-links">
                        <a href="${project.githubUrl}" class="github-link">GitHub ↗</a>
                        ${demoLink}
                    </div>
                </div>
            </article>
        `;
    }).join('');

    projectGrid.innerHTML = projectCardsHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    // Initial reveal check after rendering projects
    reveal();
});