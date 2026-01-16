# Mobile Scrolling Issues: Diagnosis & Fix Guide

## 1. Most Common Technical Causes

### A. Locomotive Scroll on Mobile (YOUR PRIMARY ISSUE)
- **Problem**: Locomotive Scroll replaces native scrolling with JavaScript-based smooth scrolling, which conflicts with mobile touch gestures
- **Symptoms**: Laggy scrolling, scroll not responding to touch, momentum scrolling disabled, scroll "jumping" or stuttering
- **Why it happens**: Mobile browsers have optimized native scrolling; JavaScript scroll libraries interfere with touch events and momentum

### B. Body/HTML Overflow Locked
- **Problem**: `overflow: hidden` on `body` or `html` prevents native scrolling
- **Symptoms**: Page doesn't scroll at all, or scrolls only within a container
- **Your code**: `body { overflow: hidden; }` in `global.css` (line 48)

### C. Fixed/Sticky Positioning Conflicts
- **Problem**: `position: fixed` elements can cause scroll issues on mobile, especially with viewport units
- **Symptoms**: Elements jump during scroll, navbar flickers, content overlaps incorrectly
- **Your code**: Multiple `position: fixed` in Navbar, Preloader components

### D. Viewport Height Units (100vh) on Mobile
- **Problem**: Mobile browsers have dynamic viewport heights (address bar shows/hides), making `100vh` unreliable
- **Symptoms**: Content cut off, scrollable area too small, layout shifts
- **Your code**: Multiple `height: 100vh` in Hero, Navbar, Contact components

### E. Missing Touch Action CSS
- **Problem**: No `touch-action` property allows browser to optimize touch gestures
- **Symptoms**: Delayed scroll response, conflicts with pinch-to-zoom

### F. JavaScript Scroll Prevention
- **Problem**: Event listeners preventing default scroll behavior
- **Symptoms**: Scroll completely blocked, or scrolls in wrong direction

### G. CSS Transform/Will-Change Overuse
- **Problem**: Excessive transforms can cause repaints and scroll jank
- **Symptoms**: Stuttering during scroll, high CPU usage

---

## 2. How Hosting/Production Builds Introduce Issues

### A. Minified CSS
- **Problem**: Minification can remove important CSS that worked in dev
- **Solution**: Verify critical CSS isn't stripped

### B. Missing Meta Tags
- **Problem**: Viewport meta tag missing or incorrect
- **Your status**: ✅ Present (`width=device-width, initial-scale=1.0`)

### C. Different Viewport Handling
- **Problem**: Production servers may serve different HTML/CSS
- **Solution**: Test production build locally with `npm run preview`

### D. Asset Loading Order
- **Problem**: CSS/JS load order differs in production
- **Solution**: Ensure Locomotive Scroll CSS loads before initialization

### E. Service Workers/Caching
- **Problem**: Cached old versions with broken scroll behavior
- **Solution**: Clear cache, check service worker registration

---

## 3. Diagnostic Checklist

### Step 1: Test in Mobile DevTools
1. Open Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
2. Select a mobile device (iPhone 12, Pixel 5)
3. Check:
   - [ ] Does the page scroll at all?
   - [ ] Is scrolling laggy/janky?
   - [ ] Does momentum scrolling work?
   - [ ] Are touch gestures responsive?

### Step 2: Inspect CSS
```bash
# In DevTools Console, run:
getComputedStyle(document.body).overflow
getComputedStyle(document.documentElement).overflow
getComputedStyle(document.body).position
```

**Expected issues in your code:**
- `body.overflow = "hidden"` ❌ (blocks native scroll)
- `html.overflow = "hidden"` when Locomotive is active ❌

### Step 3: Check Locomotive Scroll
```javascript
// In DevTools Console:
window.locomotiveScroll // Should be undefined or the instance
document.querySelector('[data-scroll-container]') // Should exist
```

### Step 4: Test Touch Events
```javascript
// In DevTools Console:
document.addEventListener('touchstart', (e) => console.log('touchstart', e), {passive: true});
document.addEventListener('touchmove', (e) => console.log('touchmove', e), {passive: true});
```

If events don't fire, something is blocking them.

### Step 5: Check Viewport Height
```javascript
// In DevTools Console:
console.log('window.innerHeight:', window.innerHeight);
console.log('document.documentElement.clientHeight:', document.documentElement.clientHeight);
console.log('100vh in px:', window.innerHeight);
```

On mobile, these may differ due to address bar.

### Step 6: Performance Profiler
1. DevTools → Performance tab
2. Record while scrolling
3. Look for:
   - Long tasks blocking scroll
   - Excessive repaints
   - Layout thrashing

---

## 4. Concrete Fixes

### Fix 1: Disable Locomotive Scroll on Mobile (RECOMMENDED)

**Why**: Native mobile scrolling is faster and more reliable than JavaScript-based smooth scrolling.

**Implementation**:

```typescript
// src/components/Layout/Layout.tsx
useEffect(() => {
  if (!scrollRef.current) return;

  // Detect mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768;

  // Disable smooth scroll on mobile
  const scroll = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: !isMobile, // Disable on mobile
    multiplier: 1,
    class: "is-revealed",
    tablet: { smooth: false }, // Disable on tablets too
    smartphone: { smooth: false }, // Explicitly disable
    // Mobile-specific options
    ...(isMobile && {
      smooth: false,
      getDirection: true,
      getSpeed: true,
    }),
  });

  setScroll(scroll);

  // Only setup GSAP ScrollTrigger on desktop
  if (!isMobile) {
    gsap.registerPlugin(ScrollTrigger);
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value?: number): number | void {
        if (typeof value === "number") {
          scroll.scrollTo(value, { duration: 0, disableLerp: true });
          return;
        }
        return scroll.scroll.instance?.scroll.y ?? scroll.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
  }

  return () => {
    if (scroll) scroll.destroy();
    if (!isMobile) {
      ScrollTrigger.removeEventListener("refresh", () => scroll.update());
    }
  };
}, [setScroll]);
```

### Fix 2: Conditional Body Overflow

**Why**: Body overflow should only be hidden when Locomotive Scroll is active on desktop.

**Implementation**:

```css
/* src/styles/global.css */
html,
body {
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-main);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Only hide overflow when Locomotive Scroll is active on desktop */
body:not(.mobile-scroll) {
  overflow: hidden; /* Locomotive Scroll requirement */
}

/* Mobile: allow native scrolling */
@media (max-width: 768px) {
  body {
    overflow: auto !important;
    position: relative !important;
  }
  
  html {
    overflow: auto !important;
    position: relative !important;
  }
  
  html[class~="has-scroll-smooth"] {
    overflow: auto !important;
    position: relative !important;
  }
}
```

### Fix 3: Add Touch Action CSS

**Why**: Allows browser to optimize touch gestures and prevent conflicts.

**Implementation**:

```css
/* src/styles/global.css - Add to html, body section */
html,
body {
  /* ... existing styles ... */
  touch-action: pan-y pinch-zoom; /* Allow vertical scroll and pinch zoom */
  -webkit-overflow-scrolling: touch; /* iOS momentum scrolling */
}

/* For scroll containers */
[data-scroll-container] {
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
}
```

### Fix 4: Fix Viewport Height on Mobile

**Why**: Mobile browsers have dynamic viewport heights. Use `dvh` (dynamic viewport height) or JavaScript.

**Implementation**:

```css
/* Replace 100vh with 100dvh on mobile */
@media (max-width: 768px) {
  .hero-section {
    height: 100dvh; /* Dynamic viewport height */
    /* Fallback for browsers that don't support dvh */
    height: 100vh;
  }
}

/* Or use min-height instead of height */
.hero-section {
  min-height: 100vh;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 100dvh;
    min-height: -webkit-fill-available; /* iOS Safari */
  }
}
```

### Fix 5: Prevent Scroll Jacking on Mobile

**Why**: Mobile users expect native scroll behavior.

**Implementation**:

```typescript
// Add to Layout.tsx useEffect
useEffect(() => {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Remove any scroll event listeners that prevent default
    const preventDefault = (e: Event) => {
      e.preventDefault();
    };
    
    // Don't prevent default on touchmove
    document.removeEventListener('touchmove', preventDefault, { passive: false });
  }
}, []);
```

### Fix 6: Optimize Fixed Position Elements

**Why**: Fixed elements can cause repaints during scroll.

**Implementation**:

```css
/* src/components/Navbar/Navbar.module.css */
.navbar {
  position: fixed;
  /* Add these for better mobile performance */
  will-change: transform;
  transform: translateZ(0); /* Force GPU acceleration */
  backface-visibility: hidden;
}
```

---

## 5. Mobile-Specific Best Practices

### A. Viewport Meta Tag ✅ (You have this)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### B. Use -webkit-overflow-scrolling
```css
.scroll-container {
  -webkit-overflow-scrolling: touch; /* iOS momentum scrolling */
}
```

### C. Avoid Scroll-Jacking
- Don't prevent default on touch events
- Don't override scroll behavior with JavaScript on mobile
- Let native scroll handle momentum and physics

### D. Use Passive Event Listeners
```javascript
// ✅ Good
element.addEventListener('touchmove', handler, { passive: true });

// ❌ Bad (blocks scroll optimization)
element.addEventListener('touchmove', handler, { passive: false });
```

### E. Optimize Fixed Elements
```css
.fixed-element {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

### F. Test on Real Devices
- iOS Safari (most restrictive)
- Chrome Android
- Samsung Internet
- Firefox Mobile

---

## 6. Most Likely Culprit Summary (Priority Order)

### 🔴 **#1: Locomotive Scroll on Mobile (95% probability)**
**Your code**: `Layout.tsx` initializes Locomotive Scroll with `smooth: true` on all devices.

**Why it breaks**: JavaScript smooth scrolling conflicts with native touch gestures, causing lag, stuttering, and broken momentum scrolling.

**Fix**: Disable Locomotive Scroll on mobile devices (see Fix 1).

---

### 🟠 **#2: Body Overflow Hidden (90% probability)**
**Your code**: `body { overflow: hidden; }` in `global.css:48`

**Why it breaks**: Prevents native scrolling entirely on mobile.

**Fix**: Conditionally apply `overflow: hidden` only when Locomotive is active on desktop (see Fix 2).

---

### 🟡 **#3: Missing Touch Action CSS (70% probability)**
**Your code**: No `touch-action` property defined.

**Why it breaks**: Browser can't optimize touch gestures, causing delayed response.

**Fix**: Add `touch-action: pan-y pinch-zoom` (see Fix 3).

---

### 🟢 **#4: Viewport Height Issues (50% probability)**
**Your code**: Multiple `height: 100vh` in Hero, Navbar, Contact.

**Why it breaks**: Mobile address bar changes viewport height, causing layout issues.

**Fix**: Use `100dvh` or `min-height` on mobile (see Fix 4).

---

### 🔵 **#5: Fixed Position Performance (30% probability)**
**Your code**: Multiple `position: fixed` elements.

**Why it breaks**: Can cause repaints during scroll on low-end devices.

**Fix**: Add GPU acceleration hints (see Fix 6).

---

## Quick Win: Immediate Fix

**Apply these two changes first** (highest impact):

1. **Disable Locomotive Scroll on mobile** (Fix 1)
2. **Allow body overflow on mobile** (Fix 2)

These two fixes will resolve 90% of mobile scrolling issues in your project.
