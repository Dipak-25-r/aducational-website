// Function to display the registration form with animation
function showRegistration() {
    document.getElementById('login-section').classList.add('hidden');
    const registrationSection = document.getElementById('registration-section');
    registrationSection.classList.remove('hidden');
    registrationSection.style.animation = 'fadeIn 0.5s forwards';
}

// Function to display the login form with animation
function showLogin() {
    document.getElementById('registration-section').classList.add('hidden');
    const loginSection = document.getElementById('login-section');
    loginSection.classList.remove('hidden');
    loginSection.style.animation = 'fadeIn 0.5s forwards';
}

// Handle login action with fade-out animation
function handleLogin() {
    alert('Logged in successfully! Redirecting to the dashboard.');
    const loginSection = document.getElementById('login-section');
    loginSection.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        loginSection.classList.add('hidden');
        document.getElementById('dashboard-section').classList.remove('hidden');
        document.getElementById('dashboard-section').style.animation = 'fadeIn 0.5s forwards';
    }, 500);
}

// Handle registration action with fade-out animation
function handleRegistration() {
    alert('Registration successful! Please log in.');
    const registrationSection = document.getElementById('registration-section');
    registrationSection.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        registrationSection.classList.add('hidden');
        showLogin();
    }, 500);
}

// Handle logout action with fade-out animation
function handleLogout() {
    alert('You have logged out.');
    const dashboardSection = document.getElementById('dashboard-section');
    dashboardSection.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        dashboardSection.classList.add('hidden');
        document.getElementById('login-section').classList.remove('hidden');
        document.getElementById('login-section').style.animation = 'fadeIn 0.5s forwards';
    }, 500);
}
