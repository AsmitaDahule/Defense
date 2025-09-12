// Main JavaScript File - Handles all dynamic functionality

// Initialize DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
});

function initializePortfolio() {
    // Load projects dynamically
    loadProjects(portfolioData.projects);
    
    // Load skills dynamically
    loadSkills(portfolioData.skills);
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize contact form handling
    initializeContactForm();
    
    // Initialize scroll animations
    initializeScrollAnimations();
}

// Function to load projects dynamically
function loadProjects(projects) {
    const projectGrid = document.getElementById('project-grid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });
}

// Helper function to create individual project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
            ${project.technologies.map(tech => `
                <span class="tech-tag">${tech}</span>
            `).join('')}
        </div>
        <a href="${project.url}" class="project-link">View Project</a>
    `;
    
    return card;
}

// Function to load skills dynamically
function loadSkills(skills) {
    const skillGrid = document.getElementById('skill-grid');
    
    skills.forEach(skill => {
        const skillCard = createSkillCard(skill);
        skillGrid.appendChild(skillCard);
    });
}

// Helper function to create individual skill cards
function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    
    card.innerHTML = `
        <h4>${skill.name}</h4>
        <div class="skill-bar">
            <div class="progress" style="width: ${skill.proficiency}%"></div>
        </div>
    `;
    
    return card;
}

// Smooth scrolling initialization
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // In production, replace with actual backend endpoint
            await simulateFormSubmission(data);
            
            // Clear form fields
            form.reset();
            
            // Show success message
            showMessage('Thank you! Your message has been sent successfully.', 'success');
        } catch (error) {
            showMessage('Error sending message. Please try again later.', 'error');
        }
    });
}

// Simulate API call (replace with actual backend endpoint)
async function simulateFormSubmission(data) {
    await new Promise(resolve => setTimeout(resolve, 1500));
}

// Scroll animation initialization
function initializeScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => observer.observe(element));
}

// Utility function to show messages
function showMessage(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Auto-remove toast after 3 seconds
    setTimeout(() => toast.remove(), 3000);
}