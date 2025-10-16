# Three.js Integration Guide

Your portfolio now includes stunning 3D effects powered by Three.js and React Three Fiber!

## 🎨 Available 3D Components

### 1. **Particles3D** - Animated Particle Field

**Location**: `app/components/Particles3D.tsx`
**Currently Used In**: Hero section

Creates an animated field of 2000 particles that slowly rotate in 3D space.

```tsx
import Particles3D from "../components/Particles3D";

<section className="relative">
  <Particles3D />
  {/* Your content here */}
</section>;
```

### 2. **Scene3D** - Interactive 3D Sphere

**Location**: `app/components/Scene3D.tsx`
**Features**: Auto-rotating distorted sphere with interactive controls

```tsx
import Scene3D from "../components/Scene3D";

<section className="relative">
  <Scene3D />
  {/* Your content here */}
</section>;
```

### 3. **FloatingCard3D** - 3D Floating Card

**Location**: `app/components/FloatingCard3D.tsx`
**Features**: Floating animated 3D card perfect for project showcases

```tsx
import FloatingCard3D from "../components/FloatingCard3D";

<FloatingCard3D height={300} />;
```

## 🔄 Switching Between Effects

### Replace Particles with Animated Sphere

In `app/(sections)/Hero.tsx`:

```tsx
// Change this:
import Particles3D from "../components/Particles3D";
<Particles3D />;

// To this:
import Scene3D from "../components/Scene3D";
<Scene3D />;
```

## 🎯 Customization Options

### Particles3D Customization

Edit `app/components/Particles3D.tsx`:

```tsx
// Change particle count
const particlesCount = 2000; // Try 3000, 5000, etc.

// Change color
color="#4da3ff" // Try "#ff6b6b", "#00f5ff", etc.

// Change size
size={0.02} // Try 0.01, 0.03, etc.

// Change opacity
opacity={0.6} // Try 0.3, 0.8, etc.
```

### Scene3D Customization

Edit `app/components/Scene3D.tsx`:

```tsx
// Change sphere color
color="#4da3ff" // Try any hex color

// Change distortion
distort={0.5} // Try 0.3, 0.7, 1.0

// Change animation speed
speed={2} // Try 1, 3, 5

// Change auto-rotation speed
autoRotateSpeed={0.5} // Try 1, 2, 3
```

## 📱 Performance Optimization

All components are optimized for:

- ✅ Mobile devices (reduced particle count automatically possible)
- ✅ Lazy loading with `Suspense`
- ✅ Client-side rendering only (`"use client"`)
- ✅ Proper cleanup on unmount

## 🚀 Adding 3D to Other Sections

### Projects Section with 3D Cards

You can replace project thumbnails with 3D cards:

```tsx
// In app/(sections)/Projects.tsx
import FloatingCard3D from "../components/FloatingCard3D";

<article className="project">
  <FloatingCard3D height={200} />
  {/* Rest of project card */}
</article>;
```

### About Section Background

Add particles to About section:

```tsx
// In app/(sections)/About.tsx
import Particles3D from "../components/Particles3D";

<section id="about" className="relative py-12">
  <Particles3D />
  {/* Rest of content */}
</section>;
```

## 🎨 Color Schemes

Popular color combinations for your portfolio:

- **Blue Tech**: `#4da3ff` (current)
- **Purple Dream**: `#a855f7`
- **Cyan Glow**: `#00f5ff`
- **Green Matrix**: `#00ff88`
- **Red Energy**: `#ff6b6b`

## 🔧 Troubleshooting

### If 3D elements don't show:

1. Make sure the section has `position: relative`
2. Check that the parent has height
3. Verify `"use client"` is at the top of the component
4. Clear `.next` cache: `rm -rf .next`

### Performance issues:

1. Reduce `particlesCount` in Particles3D
2. Lower sphere quality in Scene3D: `args={[1, 50, 100]}`
3. Disable auto-rotation on mobile

## 📚 Learn More

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei (helpers)](https://github.com/pmndrs/drei)
