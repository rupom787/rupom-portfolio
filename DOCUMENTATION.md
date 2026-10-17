# MD Robayet Hassan Rupom - Portfolio Website Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Features](#core-features)
5. [Component Architecture](#component-architecture)
6. [Animation System](#animation-system)
7. [3D Character Implementation](#3d-character-implementation)
8. [Configuration & Data Management](#configuration--data-management)
9. [Setup & Installation](#setup--installation)
10. [Build & Deployment](#build--deployment)

---

## 🎯 Project Overview

This is MD Robayet Hassan Rupom's modern, interactive portfolio website showcasing full-stack development work. The site features:
- **3D animated character** that responds to user interactions
- **Smooth scroll animations** using GSAP ScrollTrigger
- **Interactive physics-based tech stack** visualization
- **Custom cursor** effects
- **Responsive design** for desktop and mobile
- **Encrypted 3D model** for protection

### Key Characteristics:
- **Single Page Application (SPA)** built with React 18
- **TypeScript** for type safety
- **Vite** for fast development and optimized builds
- **Three.js** for 3D graphics
- **GSAP** for professional animations

### Developer Information:
- **Name**: MD Robayet Hassan Rupom
- **Email**: rupomhossain58@gmail.com
- **GitHub**: huzaifahmedz
- **Location**: Bangladesh

---

## 🛠 Technology Stack

### Core Technologies
```json
{
  "Runtime": "React 18.3.1",
  "Language": "TypeScript 5.5.3",
  "Build Tool": "Vite 5.4.1",
  "Styling": "CSS3 (Custom)",
  "3D Engine": "Three.js 0.168.0"
}
```

### Key Dependencies

#### 3D Graphics & Physics
- **three** (0.168.0) - 3D graphics library
- **@react-three/fiber** (8.17.10) - React renderer for Three.js
- **@react-three/drei** (9.120.4) - Helper utilities for R3F
- **@react-three/rapier** (1.5.0) - Physics engine integration
- **@react-three/cannon** (6.6.0) - Alternative physics engine
- **@react-three/postprocessing** (2.16.3) - Post-processing effects
- **three-stdlib** (2.33.0) - Three.js utilities & loaders

#### Animation Libraries
- **gsap** (3.12.7) - Professional animation library with ScrollTrigger
- **lenis** (1.3.15) - Smooth scroll library

#### UI Components
- **react-fast-marquee** (1.6.5) - Scrolling marquee component
- **react-icons** (5.3.0) - Icon library

#### Analytics
- **@vercel/analytics** (1.4.1) - Vercel Analytics integration

---

## 📁 Project Structure

```
Portfolio-Website/
├── public/                          # Static assets
│   ├── draco/                       # Draco decoder for GLTF compression
│   │   └── draco_decoder.js
│   ├── images/                      # Project images & tech logos
│   │   ├── project-1.webp
│   │   ├── react2.webp
│   │   ├── next2.webp
│   │   └── ... (more tech logos)
│   └── models/                      # 3D models
│       ├── char_enviorment.hdr      # HDR environment map
│       └── character.enc            # Encrypted 3D character model
│
├── src/                             # Source code
│   ├── main.tsx                     # Application entry point
│   ├── App.tsx                      # Root component
│   ├── config.ts                    # Site configuration & content
│   ├── index.css                    # Global styles
│   ├── App.css                      # App-level styles
│   │
│   ├── components/                  # React components
│   │   ├── MainContainer.tsx        # Main layout wrapper
│   │   ├── Landing.tsx              # Hero section
│   │   ├── About.tsx                # About section
│   │   ├── WhatIDo.tsx              # Skills/services section
│   │   ├── Career.tsx               # Experience timeline
│   │   ├── Work.tsx                 # Project showcase
│   │   ├── TechStack.tsx            # Interactive 3D tech balls
│   │   ├── Contact.tsx              # Contact section
│   │   ├── Navbar.tsx               # Navigation bar
│   │   ├── Cursor.tsx               # Custom cursor
│   │   ├── SocialIcons.tsx          # Social media links
│   │   ├── Loading.tsx              # Loading screen
│   │   ├── HoverLinks.tsx           # Animated nav links
│   │   └── WorkImage.tsx            # Project image component
│   │   │
│   │   ├── Character/               # 3D Character system
│   │   │   ├── index.tsx            # Character entry point
│   │   │   ├── Scene.tsx            # Three.js scene setup
│   │   │   ├── exports.ts           # Module exports
│   │   │   └── utils/               # Character utilities
│   │   │       ├── character.ts     # Character loader
│   │   │       ├── animationUtils.ts # Animation system
│   │   │       ├── lighting.ts      # Scene lighting
│   │   │       ├── mouseUtils.ts    # Mouse interactions
│   │   │       ├── resizeUtils.ts   # Responsive handling
│   │   │       └── decrypt.ts       # Model decryption
│   │   │
│   │   ├── styles/                  # Component-specific CSS
│   │   │   ├── Landing.css
│   │   │   ├── About.css
│   │   │   ├── Career.css
│   │   │   ├── Work.css
│   │   │   ├── Contact.css
│   │   │   ├── Navbar.css
│   │   │   ├── Cursor.css
│   │   │   ├── Loading.css
│   │   │   └── style.css
│   │   │
│   │   └── utils/                   # Component utilities
│   │       ├── GsapScroll.ts        # GSAP scroll animations
│   │       ├── initialFX.ts         # Initial page effects
│   │       └── splitText.ts         # Text animation helper
│   │
│   ├── context/                     # React Context providers
│   │   └── LoadingProvider.tsx      # Loading state management
│   │
│   ├── data/                        # Static data
│   │   └── boneData.ts              # 3D character bone definitions
│   │
│   └── utils/                       # Global utilities
│       └── textSplitter.ts          # Text splitting utility
│
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript config (base)
├── tsconfig.app.json                # TypeScript config (app)
├── tsconfig.node.json               # TypeScript config (node)
├── vite.config.ts                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
└── README.md                        # Project readme
```

---

## 🎨 Core Features

### 1. **Interactive 3D Character**
- Animated 3D character model that follows mouse movement
- Encrypted GLTF model with Draco compression
- Multiple animations: intro, idle, typing, blinking
- Eyebrow reactions on hover
- Smooth head rotation based on cursor position
- Responsive to touch on mobile devices

### 2. **Scroll-Triggered Animations**
- Character rotates and moves during scroll
- Smooth parallax effects on sections
- Text reveal animations
- Timeline animations for career section
- Horizontal scrolling project showcase
- Physics-based tech stack visualization

### 3. **Custom Cursor**
- Smooth follow cursor with delay effect
- Hover states for interactive elements
- Icon highlighting
- Disable states for links

### 4. **Smooth Scrolling**
- Lenis library for buttery-smooth scroll
- Custom easing functions
- Momentum-based scrolling
- Touch gesture support

### 5. **Loading Experience**
- Progress bar with percentage
- Marquee text animation
- Smooth transition to main content
- Preloading of 3D assets

### 6. **Responsive Design**
- Desktop-first approach (1024px+ for 3D character)
- Mobile-optimized layouts
- Touch interaction support
- Adaptive component rendering

---

## 🧩 Component Architecture

### App Component Flow
```
App.tsx (Root)
  └── LoadingProvider (Context)
      ├── Loading Component (Conditional)
      └── MainContainer
          ├── Cursor (Custom cursor)
          ├── Navbar (Navigation)
          ├── SocialIcons (Fixed social links)
          ├── Character (3D Model - Desktop only)
          └── Sections
              ├── Landing
              ├── About
              ├── WhatIDo
              ├── Career
              ├── Work
              ├── TechStack (Lazy loaded)
              └── Contact
```

### Key Components Breakdown

#### **1. MainContainer.tsx**
**Purpose**: Layout wrapper that orchestrates all sections

```tsx
Features:
- Manages desktop/mobile view state
- Lazy loads TechStack component
- Conditionally renders 3D character
- Handles window resize events
- Initializes text split animations
```

#### **2. Landing.tsx**
**Purpose**: Hero section with animated text

```tsx
Features:
- Displays MD Robayet Hassan Rupom's name from config
- Animated title with role toggle (Designer/Developer)
- Container for 3D character on mobile
- CSS animations for text effects
```

#### **3. Character/Scene.tsx**
**Purpose**: Three.js scene setup and 3D character rendering

```tsx
Features:
- Sets up Three.js renderer, camera, and scene
- Loads encrypted GLTF model
- Manages lighting and shadows
- Handles mouse/touch interactions
- Coordinates animations with mixer
- Responsive canvas sizing
- Cleanup on unmount

Technical Details:
- Camera: PerspectiveCamera (FOV: 14.5°)
- Renderer: WebGLRenderer with ACES tone mapping
- Pixel Ratio: Window device pixel ratio
- Animation Loop: requestAnimationFrame
```

#### **4. Work.tsx**
**Purpose**: Horizontal scrolling project showcase

```tsx
Features:
- GSAP timeline with pinning
- Horizontal scroll on vertical scroll
- Dynamic width calculation
- Project cards with images
- Technology tags display

Animation:
- Pins section on scroll
- Translates cards horizontally
- Calculates scroll distance dynamically
```

#### **5. TechStack.tsx**
**Purpose**: Interactive 3D physics simulation

```tsx
Features:
- React Three Fiber canvas
- Rapier physics engine
- Ball colliders with textures
- N8AO post-processing
- Mouse pointer interaction
- Gravity and impulse forces
- 30 spheres with tech logos

Physics:
- Linear damping: 0.75
- Angular damping: 0.15
- Friction: 0.2
- Impulse-based movement
```

#### **6. Career.tsx**
**Purpose**: Experience timeline

```tsx
Features:
- Vertical timeline visualization
- Animated timeline growth
- Staggered info box animations
- Dynamic data from config
- Pulsing dot indicator
```

#### **7. Cursor.tsx**
**Purpose**: Custom cursor implementation

```tsx
Features:
- Smooth follow with delay
- GSAP animations
- Hover state detection
- Icon snapping
- Disable states for links

Algorithm:
- Cursor position interpolation
- requestAnimationFrame loop
- Data attribute detection
```

#### **8. Navbar.tsx**
**Purpose**: Navigation and scroll control

```tsx
Features:
- Lenis smooth scroll initialization
- Animated nav links with magnetic effect
- Scroll to section functionality
- Mobile menu support
- HoverLinks component integration
```

#### **9. Loading.tsx**
**Purpose**: Loading screen with progress

```tsx
Features:
- Progress bar animation
- Marquee scrolling text
- Mouse tracking effect
- Fade out transition
- Triggers initial page effects
- Controls LoadingProvider context
```

---

## 🎬 Animation System

### GSAP ScrollTrigger Architecture

#### **1. Character Timeline (`GsapScroll.ts`)**

```javascript
Timeline 1: Landing Section
- Trigger: .landing-section
- Actions:
  • Rotate character (y: 0 → 0.7)
  • Move camera closer (z: 24.7 → 22)
  • Slide character left (x: 0 → -25%)
  • Fade out landing text
  • Reveal about section

Timeline 2: About Section
- Trigger: .about-section
- Actions:
  • Zoom out camera dramatically (z: 22 → 75)
  • Move character to side
  • Rotate character to typing position
  • Show monitor screen with glow
  • Fade in "What I Do" boxes
  • Scale down character rim

Timeline 3: What I Do Section
- Trigger: .whatIDO
- Actions:
  • Move character off screen
  • Parallax section movement
  • Final character rotation adjustment
```

#### **2. Career Timeline Animation**
```javascript
Trigger: .career-section
- Grow timeline from 10% to 100% height
- Fade in timeline line
- Stagger career boxes (0.1s delay each)
- Stop pulsing dot animation
- Parallax section movement
```

#### **3. Work Section Animation**
```javascript
Trigger: .work-section
- Pin section in place
- Calculate total scroll width
- Horizontal translate of work cards
- Smooth scrub animation
```

#### **4. Contact Animation**
```javascript
Trigger: .contact-section
- Fade in title from bottom
- Stagger contact boxes
- Power3.out easing
```

### Animation Techniques Used

1. **Scrub Animation**: Animations tied to scroll position
2. **Pin**: Section stays fixed while animations play
3. **Stagger**: Sequential animation with delay
4. **Fade In/Out**: Opacity transitions
5. **Transform**: Translate, rotate, scale
6. **Timeline Composition**: Multiple animations in sequence
7. **Parallax**: Different scroll speeds for depth

---

## 🎭 3D Character Implementation

### Architecture Overview

```
Character System
├── Model Loading (character.ts)
├── Scene Setup (Scene.tsx)
├── Animation System (animationUtils.ts)
├── Lighting (lighting.ts)
├── Interactions (mouseUtils.ts)
└── Decryption (decrypt.ts)
```

### 1. Model Loading Process

```typescript
File: character.ts

Steps:
1. Decrypt encrypted model file
2. Create blob URL from decrypted data
3. Load GLTF with DRACOLoader
4. Compile shaders with renderer
5. Configure mesh properties
6. Setup scroll animations
7. Adjust character foot positions
```

**Encryption Details:**
- Model file: `character.enc`
- Password: `Character3D#@`
- Decryption happens client-side
- Prevents model theft

### 2. Animation System

```typescript
File: animationUtils.ts

Animations:
1. introAnimation - Initial character entrance
2. Blink - Eye blinking loop
3. typing - Finger movements on keyboard
4. browup - Eyebrow raise on hover
5. key1, key2, key5, key6 - Individual key presses

Animation Mixer:
- Controls all animations
- Updates every frame
- Blends between animations
- Loop modes: LoopOnce, LoopRepeat
```

**Bone Animations:**
- Typing animation filtered to finger bones only
- Eyebrow animation isolated to facial bones
- Allows simultaneous independent animations

### 3. Lighting System

```typescript
File: lighting.ts

Lights:
1. Ambient Light - Base illumination
2. Directional Light - Main light source with shadows
3. Point Light - Screen glow effect
4. Hemisphere Light - Sky/ground color

Screen Light:
- Dynamic emissive material
- Randomized intensity flicker
- Attached to monitor object
- Creates typing ambiance
```

### 4. Mouse Interaction

```typescript
File: mouseUtils.ts

Features:
1. Head Rotation
   - Follows mouse position
   - Lerp interpolation for smoothness
   - Separate X/Y interpolation rates

2. Touch Support
   - Touch move tracking
   - Touch end reset
   - Momentum-based return

Algorithm:
- Mouse X/Y normalized to -1 to 1
- Mapped to rotation range
- Lerp smoothing (interpolation 0.1-0.2)
- Applied to head bone rotation
```

### 5. Responsive Handling

```typescript
File: resizeUtils.ts

On Window Resize:
- Update camera aspect ratio
- Resize renderer
- Update projection matrix
- Adjust character position
- Recalculate container dimensions
```

### Scene Configuration

```typescript
Camera Settings:
- Type: PerspectiveCamera
- FOV: 14.5°
- Aspect: Container width/height
- Position: (0, 13.1, 24.7)
- Zoom: 1.1

Renderer Settings:
- Alpha: true (transparent background)
- Antialias: true
- Tone Mapping: ACESFilmicToneMapping
- Exposure: 1
- Pixel Ratio: Device pixel ratio

Scene Properties:
- Background: Transparent
- Environment: HDR (char_enviorment.hdr)
- Shadows: Enabled
```

---

## ⚙️ Configuration & Data Management

### config.ts - Central Configuration

All site content is managed in `src/config.ts`:

```typescript
Structure:
├── developer          # Personal info
│   ├── name
│   ├── fullName
│   ├── title
│   └── description
│
├── social             # Social links
│   ├── github
│   ├── email
│   └── location
│
├── about              # About section
│   ├── title
│   └── description
│
├── experiences[]      # Career timeline
│   ├── position
│   ├── company
│   ├── period
│   ├── location
│   ├── description
│   ├── responsibilities[]
│   └── technologies[]
│
├── projects[]         # Portfolio projects
│   ├── id
│   ├── title
│   ├── category
│   ├── technologies
│   └── image
│
├── contact            # Contact links
│   ├── email
│   ├── github
│   ├── linkedin
│   ├── twitter
│   └── instagram
│
└── skills             # Skill categories
    ├── develop
    │   ├── title
    │   ├── description
    │   ├── details
    │   └── tools[]
    └── design
        └── (same structure)
```

### boneData.ts - Character Bones

Defines which bones to animate:

```typescript
typingBoneNames: [
  "fingerl1",
  "fingerl2",
  "fingerl3",
  // ... all finger bones
]

eyebrowBoneNames: [
  "browInnerUp_L",
  "browInnerUp_R",
  // ... all eyebrow bones
]
```

### How to Customize Content

1. **Change personal info**: Edit `config.developer`
2. **Update projects**: Modify `config.projects` array
3. **Add experience**: Add to `config.experiences`
4. **Change skills**: Update `config.skills`
5. **Update social links**: Edit `config.contact`

**No code changes needed** - all content driven from config!

---

## 🚀 Setup & Installation

### Prerequisites
```bash
Node.js >= 16.x
npm >= 8.x
```

### Installation Steps

1. **Clone/Download the project**
```bash
cd project-directory
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Server runs at: `http://localhost:5173/`

### Available Scripts

```json
{
  "dev": "vite --host",           // Dev server with network access
  "build": "tsc -b && vite build", // Production build
  "lint": "eslint .",              // Run ESLint
  "preview": "vite preview"        // Preview production build
}
```

### Development Workflow

1. **Hot Module Replacement (HMR)**: Changes reflect instantly
2. **TypeScript checking**: Compile-time error detection
3. **ESLint**: Code quality enforcement
4. **Fast Refresh**: Component state preservation

---

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

Output: `dist/` folder

Build Process:
1. TypeScript compilation check
2. Vite optimization
3. Asset bundling
4. Code minification
5. Tree shaking
6. CSS extraction

### Build Optimizations

- **Code Splitting**: Lazy loaded components
- **Asset Optimization**: Image compression
- **Tree Shaking**: Dead code elimination
- **Minification**: JS/CSS/HTML
- **Source Maps**: Debug support

### Deployment Options

#### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Features:
- Automatic deployments
- Edge network
- Analytics included
- Zero configuration

#### 2. **Netlify**
```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

#### 3. **GitHub Pages**
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json
"homepage": "https://username.github.io/repo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

#### 4. **Custom Server**
Upload `dist/` folder contents to web server.

**Server Requirements:**
- Static file serving
- SPA fallback (all routes → index.html)
- HTTPS recommended

---

## 🔧 Technical Details

### Performance Optimizations

1. **Lazy Loading**
   - TechStack component lazy loaded
   - Character component conditional

2. **Asset Optimization**
   - GLTF model with Draco compression
   - WebP images for projects
   - HDR environment map optimization

3. **Animation Performance**
   - requestAnimationFrame
   - Transform over position/size changes
   - GPU-accelerated properties
   - Debounced event handlers

4. **Code Splitting**
   - Dynamic imports
   - Route-based splitting
   - Component-level splitting

### Browser Compatibility

**Supported Browsers:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Required Features:**
- ES2020 support
- WebGL 2.0
- CSS Grid
- Custom Properties
- IntersectionObserver

### Mobile Considerations

- 3D character disabled on <1024px width
- Touch event handlers
- Reduced animation complexity
- Optimized asset loading
- Viewport-based rendering

---

## 📝 Customization Guide

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --accentColor: #c2a4ff;      /* Purple accent */
  --backgroundColor: #0b080c;   /* Dark background */
}
```

### Replace 3D Character

1. Export GLTF from Blender/3D software
2. Compress with Draco
3. Encrypt with `encrypt.cjs` script
4. Replace `character.enc` in `/public/models/`
5. Update bone names in `boneData.ts`
6. Adjust camera position in `Scene.tsx`

### Add New Section

1. Create component in `src/components/`
2. Add CSS file in `src/components/styles/`
3. Import in `MainContainer.tsx`
4. Add to render tree
5. Create GSAP timeline if needed

### Modify Animations

Edit `src/components/utils/GsapScroll.ts`:

```typescript
// Add new timeline
const myTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".my-section",
    start: "top center",
    end: "bottom top",
    scrub: true,
  },
});

myTimeline.to(".my-element", {
  x: 100,
  duration: 1,
});
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue 1: 3D Character not loading**
```
Solution:
- Check console for errors
- Verify character.enc exists in /public/models/
- Check decrypt password matches
- Ensure draco decoder is in /public/draco/
```

**Issue 2: Animations not working**
```
Solution:
- Verify GSAP ScrollTrigger is registered
- Check trigger elements exist in DOM
- Use ScrollTrigger.refresh() after DOM changes
- Check for console errors
```

**Issue 3: Smooth scroll not working**
```
Solution:
- Ensure Lenis is initialized in Navbar
- Check lenis.start() is called after loading
- Verify overflow-y on body is not hidden
```

**Issue 4: Build errors**
```
Solution:
- Clear node_modules and reinstall
- Check TypeScript errors
- Verify all imports are correct
- Run npm run lint
```

---

## 📚 Learning Resources

### Technologies Used

**React Three Fiber:**
- [Official Docs](https://docs.pmnd.rs/react-three-fiber)
- [Examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)

**GSAP:**
- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

**Three.js:**
- [Three.js Docs](https://threejs.org/docs/)
- [Journey Course](https://threejs-journey.com/)

**Lenis Smooth Scroll:**
- [GitHub Repo](https://github.com/studio-freight/lenis)

---

## 🎯 Key Concepts Explained

### 1. **Lazy Loading Pattern**
```tsx
const TechStack = lazy(() => import("./TechStack"));

// Wrapped in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <TechStack />
</Suspense>
```

### 2. **Context Pattern for State**
```tsx
// Provider wraps app
<LoadingProvider>
  {children}
</LoadingProvider>

// Consume with hook
const { isLoading, setLoading } = useLoading();
```

### 3. **Ref Pattern for Three.js**
```tsx
// Store Three.js objects in refs
const sceneRef = useRef(new THREE.Scene());
const cameraRef = useRef<THREE.Camera>(null);
```

### 4. **GSAP Timeline Pattern**
```tsx
const tl = gsap.timeline({
  scrollTrigger: { /* config */ }
});

tl.to(element, { props })
  .to(element2, { props }, 0) // Same time
  .to(element3, { props }, "+=0.5"); // After delay
```

### 5. **Asset Loading Pattern**
```tsx
// Promise-based loading
const loadCharacter = () => {
  return new Promise((resolve, reject) => {
    loader.load(url, 
      (gltf) => resolve(gltf),
      undefined,
      (error) => reject(error)
    );
  });
};
```

---

## 📄 File Naming Conventions

- **Components**: PascalCase (e.g., `MainContainer.tsx`)
- **Utilities**: camelCase (e.g., `animationUtils.ts`)
- **Styles**: PascalCase matching component (e.g., `Landing.css`)
- **Config/Data**: camelCase (e.g., `config.ts`, `boneData.ts`)
- **Types**: PascalCase with Type suffix (e.g., `LoadingType`)

---

## 🔐 Security Notes

### Model Encryption
The 3D character model is encrypted to prevent easy theft:
- Encryption key: `Character3D#@`
- Decryption happens client-side
- Not foolproof but adds friction
- Source: `decrypt.ts` utility

**Note**: This is obfuscation, not true security. Determined users can extract the model.

---

## ⚡ Performance Metrics

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90
- **Core Web Vitals**: Pass

### Optimization Tips
1. Use WebP/AVIF for images
2. Lazy load below-fold content
3. Minimize JavaScript bundles
4. Enable compression (gzip/brotli)
5. Use CDN for static assets
6. Implement caching headers

---

## 🎨 Design System

### Typography
- **Font**: Geist (Variable font)
- **Weights**: 100-900
- **Headings**: Geist
- **Body**: Geist

### Color Palette
```css
Primary: #c2a4ff (Purple)
Background: #0b080c (Near black)
Text: #eae5ec (Off-white)
Accent: #C8BFFF (Light purple)
```

### Spacing
Based on responsive units and CSS custom properties

### Breakpoints
```css
Mobile: < 1024px
Desktop: >= 1024px
```

---

## 🤝 Contributing

To modify or extend this portfolio:

1. Fork/clone the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Ensure no TypeScript errors
6. Update documentation if needed
7. Submit pull request

### Code Style
- Follow existing patterns
- Use TypeScript types
- Comment complex logic
- Keep components focused
- Extract reusable utilities

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

## 🙏 Credits

**Developer**: Huzaif Ahmed
**3D Character**: Custom model
**Libraries**: See package.json for full list

**Special Thanks**:
- GSAP for animation library
- Three.js community
- React Three Fiber team
- Lenis for smooth scroll

---

## 📞 Support

For questions or issues:
- Email: dev.huzaif@gmail.com
- GitHub: @huzaifahmedz

---

## 🔄 Update Log

**Version 1.0.0** - Initial Release
- Core portfolio functionality
- 3D character integration
- Scroll animations
- Interactive tech stack
- Responsive design

---

## 🚦 Development Status

**Current State**: Production Ready ✅

**Known Issues**:
- GSAP club plugins replaced with trial versions (cannot host with trial)
- Three-mesh-bvh deprecated version warning
- 11 npm vulnerabilities (3 low, 6 moderate, 2 high)

**Roadmap**:
- [ ] Replace trial GSAP plugins with club plugins for production
- [ ] Fix npm security vulnerabilities
- [ ] Add more project animations
- [ ] Implement dark/light theme toggle
- [ ] Add blog section
- [ ] Improve mobile 3D performance

---

**End of Documentation**

This documentation covers all aspects of the portfolio website. For specific implementation details, refer to the source code files mentioned throughout this document.
