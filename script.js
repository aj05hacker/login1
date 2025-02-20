document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
    }

    // Check credentials
    const validUsernames = ['admin', 'Admin'];
    const validPassword = 'testing@123';
    
    if (!validUsernames.includes(username) || password !== validPassword) {
        alert('Invalid username or password');
        return;
    }

    // Simulate login process with animation
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.innerHTML = 'Logging in...';
    loginBtn.disabled = true;

    // Add loading animation
    loginBtn.classList.add('loading');

    // Simulate API call delay
    setTimeout(() => {
        // Redirect to example.com after successful login
        window.location.href = 'https://192.168.31.249';
    }, 2000);
});

// Add hover effects for social icons
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-3px)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// Add animation for input fields
const inputFields = document.querySelectorAll('.input-group input');
inputFields.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.05)';
    });
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});

// Add animation for the login box
const loginBox = document.querySelector('.login-box');
let rotationTimeout;

window.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    loginBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    loginBox.style.transition = 'transform 0.1s ease-out';
    
    // Clear any existing timeout
    clearTimeout(rotationTimeout);
    
    // Set timeout to reset rotation
    rotationTimeout = setTimeout(() => {
        loginBox.style.transform = 'rotateY(0deg) rotateX(0deg)';
        loginBox.style.transition = 'transform 0.5s ease-out';
    }, 100);
});
