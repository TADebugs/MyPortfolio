# 🚀 My Portfolio Collection

A collection of stunning, interactive 3D portfolio websites showcasing my work, skills, and projects. Built with modern web technologies and featuring immersive 3D experiences.

## 📋 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This repository contains multiple portfolio implementations, each with unique designs and interactive 3D elements. Whether you're looking for an immersive island adventure or a sleek starry space theme, these portfolios demonstrate modern web development practices and creative design.

## 🎨 Projects

### 1. **Good Look Portfolio** 🌴
An immersive 3D portfolio featuring an interactive island scene with animated elements including:
- Interactive 3D island environment
- Animated biplane that responds to user interaction
- Soaring birds and dynamic sky
- Background music integration
- Smooth navigation between sections (Home, About, Projects, Contact)
- Responsive design for all devices

### 2. **Quick Look Portfolio** ⭐
A modern 3D portfolio with space-themed elements:
- Stunning 3D star field background
- Interactive 3D computer models
- Project showcase with hover effects
- Experience timeline
- Tech stack visualization
- Contact form with EmailJS integration

### 3. **Matrix Page** 💚
A Matrix-themed web page featuring:
- Classic Matrix digital rain effect
- Responsive canvas animation
- Retro aesthetic design

## ✨ Features

- 🎨 **Interactive 3D Graphics**: Immersive Three.js-powered 3D environments
- 📱 **Responsive Design**: Fully responsive across all devices
- 🎵 **Audio Integration**: Background music and sound effects
- 🎭 **Smooth Animations**: Framer Motion and React Spring animations
- 📧 **Contact Forms**: EmailJS integration for direct communication
- 🌐 **Modern Routing**: React Router for seamless navigation
- 🎯 **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

### Core Technologies
- **React** - UI library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling

### Additional Libraries
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **EmailJS** - Email service integration
- **React Vertical Timeline** - Timeline component

## 📁 Project Structure

```
MyPortfolio/
├── good look portfolio/          # 3D Island Portfolio
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   ├── pages/                # Page components
│   │   ├── models/               # 3D model components
│   │   ├── assets/               # Images, icons, 3D models
│   │   └── constants/            # Configuration
│   └── package.json
│
├── quick look portfolio/         # Space-themed Portfolio
│   ├── src/
│   │   ├── components/           # UI components
│   │   ├── components/canvas/    # 3D canvas components
│   │   ├── assets/               # Project images & assets
│   │   └── utils/                # Utility functions
│   └── package.json
│
└── matrix page/                  # Matrix Rain Effect
    ├── src/
    │   ├── matrix.js             # Matrix animation logic
    │   └── styles.css
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager
- Basic knowledge of React and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Navigate to a specific project**
   ```bash
   cd "good look portfolio"
   # or
   cd "quick look portfolio"
   # or
   cd "matrix page"
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 💻 Usage

### Development Mode

Run the development server with hot-reload:

```bash
npm run dev
```

### Production Build

Build the project for production:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Technologies Used

### Good Look Portfolio
- React 18.2.0
- Three.js 0.157.0
- React Three Fiber 8.14.5
- React Three Drei 9.88.2
- React Spring 9.7.3
- Tailwind CSS 3.3.3
- EmailJS 3.11.0

### Quick Look Portfolio
- React 18.2.0
- Three.js 0.149.0
- React Three Fiber 8.11.1
- Framer Motion 9.0.7
- Tailwind CSS 3.2.6
- EmailJS 3.10.0

### Matrix Page
- Vanilla JavaScript
- HTML5 Canvas
- CSS3

## 📝 Configuration

### EmailJS Setup (for Contact Forms)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Add your credentials to the contact form components:
   ```javascript
   // In Contact component
   serviceId: 'your_service_id',
   templateId: 'your_template_id',
   publicKey: 'your_public_key'
   ```

## 🌐 Deployment

Each project can be deployed independently:

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to project directory
3. Run: `vercel`

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
- GitHub Pages
- AWS Amplify
- Firebase Hosting

## 📸 Screenshots

> **Note**: Add screenshots or demo links here to showcase your portfolios

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/MyPortfolio/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@TADebugs](https://github.com/TADebugs)
- LinkedIn: [tanmaydesai2126](https://www.linkedin.com/in/tanmaydesai2126/)
- Portfolio: [Live Portfolio](https://yourportfolio.com)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for the amazing 3D library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for the React integration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All the amazing open-source contributors

---

⭐ If you found this project helpful, please consider giving it a star!

