// querySelector allows to select html elements and classes instead of the id
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// GetElementById variables
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_Code_review_${color}.svg`;
    image2.src = `img/undraw_Resume_${color}.svg`;
    image3.src = `img/undraw_Code_thinking_${color}.svg`;
}


// Dark Mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb( 0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb( 255 255 255 / 50%)';
    // Toggle checkbox
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // images
    imageMode('dark');
}

// Light Mode styles
function lightMode() {
    nav.style.backgroundColor = 'rgb( 255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb( 0 0 0 / 50%)';
    // Toggle checkbox
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    // images
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);