import React from 'react';
import sdk from '@stackblitz/sdk';

interface StackBlitzEmbedProps {
  projectId: string;
  openFile?: string;
}

const StackBlitzEmbed: React.FC<StackBlitzEmbedProps> = ({ projectId, openFile }) => {
  const handleOpenProject = () => {
    sdk.openProject(
      {
        title: 'Insta-Bar Website',
        description: 'Insta-Bar™ Solid Metal Verification System Website',
        template: 'html',
        files: {
          'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Insta-Bar™ | Advanced Full-Arch Implant Verification System</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <span class="logo-icon">⚡</span>
        <span class="logo-text">Insta-Bar™</span>
      </div>
      <ul class="nav-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
      <button class="cta-button">Contact Sales</button>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Insta-Bar™ Solid Metal<br>Verification System</h1>
        <p>Revolutionary Precision for Full-Arch Implant Cases</p>
        <div class="hero-buttons">
          <button class="primary-button">Get Started</button>
          <button class="secondary-button">Watch Demo</button>
        </div>
      </div>
    </section>

    <section class="features" id="features">
      <!-- Features content -->
    </section>

    <section class="products" id="products">
      <!-- Products content -->
    </section>
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <h3>Insta-Bar</h3>
        <p>Revolutionizing implant verification with cutting-edge technology</p>
      </div>
      <div class="footer-links">
        <div class="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="#standard">Standard System</a></li>
            <li><a href="#digital">Digital Bundle</a></li>
            <li><a href="#pro">Professional Kit</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Insta-Bar. All rights reserved.</p>
    </div>
  </footer>

  <script src="main.js"></script>
</body>
</html>`,
          'style.css': `/* Base styles */
:root {
  --primary: #0066FF;
  --primary-dark: #0052CC;
  --accent: #FF3D00;
  --background: #121212;
  --background-dark: #0A0A0A;
  --text: #F8F9FA;
  --text-muted: #A0AEC0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--background);
  color: var(--text);
  line-height: 1.5;
}

/* Header & Navigation */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(8px);
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary);
}

/* Buttons */
.cta-button,
.primary-button,
.secondary-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-button,
.primary-button {
  background-color: var(--primary);
  color: white;
  border: none;
}

.secondary-button {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
}

.hero-content {
  max-width: 800px;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw + 1rem, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero p {
  font-size: clamp(1.25rem, 2vw + 0.5rem, 1.5rem);
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Footer */
.footer {
  background-color: var(--background-dark);
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-info h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.footer-section h4 {
  color: var(--text);
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: var(--primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
}`,
          'main.js': `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  if (currentScroll > 50) {
    header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
  
  lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.innerHTML = '☰';
document.querySelector('.nav').appendChild(mobileMenuButton);

mobileMenuButton.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});`
        },
        settings: {
          compile: {
            trigger: 'auto',
            clearConsole: false
          }
        }
      },
      {
        openFile: 'index.html',
        newWindow: true
      }
    );
  };

  return (
    <div className="py-20 bg-background">
      <div className="container-default">
        <div className="text-center mb-12">
          <h2 className="section-title">Open in Development Environment</h2>
          <p className="section-subtitle">
            Explore and modify the code in StackBlitz
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleOpenProject}
            className="btn-primary flex items-center gap-2"
          >
            Open in StackBlitz
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackBlitzEmbed;