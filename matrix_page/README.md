# 💚 Matrix Page - Digital Rain Effect

A Matrix-themed web page featuring the iconic digital rain effect from the Matrix movie series. Built with vanilla JavaScript and HTML5 Canvas for a nostalgic, retro aesthetic.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite&logoColor=white)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)

## 🎯 Overview

Matrix Page is a nostalgic web implementation of the iconic Matrix digital rain effect. This standalone page features a full-screen canvas animation with falling characters, creating an immersive Matrix-themed experience.

### Key Highlights

- **Digital Rain Effect**: Classic Matrix-style falling characters
- **Full-Screen Canvas**: Responsive canvas that adapts to window size
- **Retro Aesthetic**: Green-on-black color scheme
- **Smooth Animation**: 60fps animation using requestAnimationFrame
- **Lightweight**: Pure JavaScript, no external dependencies
- **Responsive**: Works on all screen sizes

## ✨ Features

### 🎨 Visual Effects
- **Falling Characters**: Animated columns of characters falling down the screen
- **Random Characters**: Mix of letters, numbers, and symbols
- **Fade Effect**: Characters fade out as they fall
- **Green Color Scheme**: Classic Matrix green (#0f0) on black background
- **Dynamic Speed**: Adjustable falling speed

### 📱 User Experience
- **Full-Screen Display**: Canvas fills the entire viewport
- **Responsive Design**: Automatically adjusts to window resize
- **Smooth Performance**: Optimized for 60fps animation
- **No Dependencies**: Pure vanilla JavaScript implementation

## 🛠️ Tech Stack

### Core Technologies
- **HTML5 Canvas** - For rendering the animation
- **Vanilla JavaScript (ES6+)** - Core animation logic
- **CSS3** - Styling and layout
- **Vite** 5.0.0 - Build tool and dev server

### No External Dependencies
This project intentionally uses no external libraries or frameworks, keeping it lightweight and performant.

## 📁 Project Structure

```
matrix page/
├── public/
│   └── assets/
│       └── background/
│           └── matrix.png
├── src/
│   ├── main.js          # Entry point and initialization
│   ├── matrix.js        # Matrix rain effect logic
│   └── styles.css        # All styles
├── assets/
│   └── background/
│       └── matrix.png
├── index.html           # HTML structure
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TADebugs/MyPortfolio.git
   cd MyPortfolio/"matrix page"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 💻 Usage

### Development

Run the development server with hot-reload:

```bash
npm run dev
```

The page will automatically reload when you make changes to the source files.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization

### Changing Colors

Edit `src/matrix.js` to customize colors:

```javascript
// Change character color
ctx.fillStyle = '#0f0'; // Matrix green

// Change background fade color
ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Black fade
```

### Adjusting Speed

Modify the drop speed in `src/matrix.js`:

```javascript
// Increase or decrease speed by modifying the drop increment
drops[i] += 0.5; // Slower
drops[i] += 2;   // Faster
```

### Changing Characters

Customize the character set:

```javascript
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
// Add or remove characters as desired
```

### Font Size

Adjust the font size:

```javascript
const fontSize = 14; // Change this value
```

### Canvas Background

You can add a background image by modifying `src/styles.css`:

```css
body {
  background-image: url('../assets/background/matrix.png');
  background-size: cover;
  background-position: center;
}
```

## 🌐 Deployment

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch

### Other Platforms

- **AWS Amplify**: Connect your repository
- **Firebase Hosting**: Deploy the `dist` folder
- **Any Static Host**: Upload the `dist` folder contents

## 🔧 Technical Details

### Animation Loop

The animation uses `requestAnimationFrame` for smooth 60fps rendering:

```javascript
function drawMatrix() {
    // Clear and redraw
    // Update drop positions
    // Request next frame
    requestAnimationFrame(drawMatrix);
}
```

### Responsive Canvas

The canvas automatically resizes when the window size changes:

```javascript
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](../../LICENSE).

## 👤 Author

**Tanmay Desai**

- GitHub: [@TADebugs](https://github.com/TADebugs)
- LinkedIn: [tanmaydesai2126](https://www.linkedin.com/in/tanmaydesai2126/)

## 🙏 Acknowledgments

- Inspired by the iconic Matrix movie series
- Built with pure web technologies for maximum performance
- Canvas API for efficient rendering

## 📝 Notes

- The animation is optimized for performance
- Works best on modern browsers with Canvas support
- Mobile-friendly with responsive design
- No external dependencies means faster load times

---

⭐ If you found this project helpful, please consider giving it a star!

💚 "There is no spoon." - The Matrix
