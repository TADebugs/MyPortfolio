import './styles.css';
import { initMatrixRain } from './matrix.js';

// Initialize matrix rain effect
initMatrixRain();

// Pill choice logic
function choosePill(color) {
    const choiceScreen = document.getElementById('choiceScreen');
    
    // Add transition effect
    choiceScreen.style.opacity = '0';
    choiceScreen.style.transition = 'opacity 1s ease-out';
    
    setTimeout(() => {
        // Redirect based on pill choice
        if (color === 'red') {
            // Red pill → Good Look Portfolio (deeper dive)
            // URL-encode spaces in folder names for proper navigation
            const redPillPath = '../good%20look%20portfolio/index.html';
            window.location.href = redPillPath;
        } else {
            // Blue pill → Quick Look Portfolio
            // URL-encode spaces in folder names for proper navigation
            const bluePillPath = '../quick%20look%20portfolio/index.html';
            window.location.href = bluePillPath;
        }
    }, 1000); // Wait for fade out animation
}

function goBack() {
    const choiceScreen = document.getElementById('choiceScreen');
    const redOutcome = document.getElementById('redOutcome');
    const blueOutcome = document.getElementById('blueOutcome');

    choiceScreen.style.display = 'block';
    choiceScreen.style.opacity = '1';
    redOutcome.classList.remove('active');
    blueOutcome.classList.remove('active');
}

// Make functions available globally for onclick handlers
window.choosePill = choosePill;
window.goBack = goBack;

