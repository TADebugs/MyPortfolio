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
            // Red pill → Good Look Portfolio (deeper dive - 3D Island Adventure)
            // Update this URL to match your actual Vercel deployment URL
            const redPillUrl = 'https://my-portfolio-rho-blush-81.vercel.app';
            // Alternative: If deploying from same repo, use relative path:
            // const redPillUrl = '../good_look_page';
            window.location.href = redPillUrl;
        } else {
            // Blue pill → Quick Look Portfolio (space theme)
            // Update this URL to match your actual Vercel deployment URL
            const bluePillUrl = 'https://my-portfolio-c33x.vercel.app/';
            // Alternative: If deploying from same repo, use relative path:
            // const bluePillUrl = '../quick_look_page';
            window.location.href = bluePillUrl;
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

