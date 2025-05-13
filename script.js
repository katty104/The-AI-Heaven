document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        
        const icon = this.querySelector('i');
        icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });

    // Mobile menu
    const mobileMenu = document.querySelector('.nav-list');
    document.querySelector('.mobile-menu-toggle button').addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });

    // Cookie banner
    function acceptCookies() {
        document.cookie = "aiheaven_cookies=true; max-age=31536000";
        document.getElementById('cookie-banner').style.display = 'none';
    }
    
    if (!document.cookie.includes('aiheaven_cookies=true')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
