// Project data
const projects = [
    {
        id: 1,
        title: "Neural Network Visualization",
        category: "Machine Learning",
        description: "An interactive visualization tool for neural networks that helps students understand the inner workings of deep learning models.",
        technologies: ["PyTorch", "React", "D3.js"],
        icon: "icons/ai.png",
        image: "icons/ai.png",
        gitrepo: "https://github.com/christiandalfarra/SIVProject"
    },
    {
        id: 2,
        title: "Computer Vision Project",
        category: "CV / Image Processing",
        description: "A novel approach to object detection that improves accuracy in low-light conditions, reducing computational requirements by 35%.",
        technologies: ["TensorFlow", "Python", "OpenCV"],
        icon: "icons/ai.png",
        image: "icons/ai.png",
        gitrepo: "https://github.com/christiandalfarra/SIVProject"
    },
    {
        id: 3,
        title: "NLP Sentiment Analyzer",
        category: "Natural Language Processing",
        description: "A multilingual sentiment analysis tool that works across 12 languages with state-of-the-art accuracy for academic text analysis.",
        technologies: ["BERT", "Hugging Face", "Flask"],
        icon: "icons/ai.png",
        image: "icons/ai.png",
        gitrepo: "https://github.com/christiandalfarra/SIVProject"
    },
    {
        id: 4,
        title: "NLP Sentiment Analyzer",
        category: "Natural Language Processing",
        description: "A multilingual sentiment analysis tool that works across 12 languages with state-of-the-art accuracy for academic text analysis.",
        technologies: ["BERT", "Hugging Face", "Flask"],
        icon: "icons/ai.png",
        image: "icons/ai.png",
        gitrepo: "https://github.com/christiandalfarra/SIVProject"
    },
    {
        id: 5,
        title: "NLP Sentiment Analyzer",
        category: "Natural Language Processing",
        description: "A multilingual sentiment analysis tool that works across 12 languages with state-of-the-art accuracy for academic text analysis.",
        technologies: ["BERT", "Hugging Face", "Flask"],
        icon: "icons/ai.png",
        image: "icons/ai.png",
        gitrepo: "https://github.com/christiandalfarra/SIVProject"
    }
];

// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');
const viewProjectsBtn = document.getElementById('view-projects-btn');
const projectsGrid = document.querySelector('.projects-grid');
const projectModal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal');
const customCursor = document.querySelector('.custom-cursor');
const menuLinks = document.querySelectorAll('.menu-link');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);

    // Generate project items
    renderProjects();

    // Event listeners
    setupEventListeners();
});

// Custom cursor movement
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    }
});

// Setup all event listeners
function setupEventListeners() {
    // Menu toggle
    menuBtn.addEventListener('click', toggleMenu);
    
    // Scroll to projects
    viewProjectsBtn.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // Menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            toggleMenu();
        });
    });
}

// Toggle menu
function toggleMenu() {
    menuOverlay.classList.toggle('active');
    if (menuOverlay.classList.contains('active')) {
        menuBtn.textContent = 'Close';
    } else {
        menuBtn.textContent = 'Menu';
    }
}

// Render projects
function renderProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <div class="project-image">
                <img src="${project.icon}" alt="${project.title}">
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-meta">${project.category}</p>
        `;
        
        projectElement.addEventListener('click', () => {
            openProjectModal(project);
        });
        
        projectsGrid.appendChild(projectElement);
    });
}

// Open project modal
function openProjectModal(project) {
    const modalImage = projectModal.querySelector('.modal-image');
    const modalDetails = projectModal.querySelector('.modal-details');
    
    modalImage.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
    modalDetails.innerHTML = `
        <div class="project-content">
            <h2>${project.title}</h2>
            <p class="project-description">${project.description}</p>
        </div>
        <div class="project-info">
            <div>
                <h5>CATEGORY</h5>
                <p>${project.category}</p>
            </div>
            <div>
                <h5>GIT</h5>
                <p><a href=${project.gitrepo}>GitHub</a></p>
            </div>
            <div>
                <h5>TECHNOLOGIES</h5>
                <p>${project.technologies.join(', ')}</p>
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}
