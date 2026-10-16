# UNOS TACOS Y BIRRIA — Authentic Mexican Street Food Platform

A production-grade, highly responsive, and visually rich digital web storefront built for **Unos Tacos y Birria**, a premier culinary brand celebrating Jalisco-style slow-braised beef birria, artisanal handmade corn and flour tortilla specialties, and traditional fruit-steeped aguas frescas.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Culinary Identity & Brand Concept](#culinary-identity--brand-concept)
3. [Key Highlights & Menu Features](#key-highlights--menu-features)
4. [Project Directory & Asset Inventory](#project-directory--asset-inventory)
5. [User Interface & Layout Architecture](#user-interface--layout-architecture)
6. [Interactive Components & Client Features](#interactive-components--client-features)
7. [Design System & Theme Tokens](#design-system--theme-tokens)
8. [Responsive Breakpoints & Device Adaptability](#responsive-breakpoints--device-adaptability)
9. [Performance, SEO & Accessibility Standards](#performance-seo--accessibility-standards)
10. [Local Development & Quickstart](#local-development--quickstart)
11. [Deployment Guides](#deployment-guides)
12. [Browser Compatibility Matrix](#browser-compatibility-matrix)
13. [Code Style & Best Practices](#code-style--best-practices)
14. [Contributing Guidelines](#contributing-guidelines)
15. [License & Attribution](#license--attribution)

---

## Project Overview

**Unos Tacos y Birria** delivers a focused, high-impact digital presence engineered to convert casual online browsers into loyal restaurant patrons and catering clients. Featuring warm earthy tones, crisp food photography, and fluid scrolling experiences, the application introduces visitors to traditional birria craftsmanship while offering smooth navigation through food menus, combo options, beverage catalogs, and restaurant locations.

### Purpose & Objectives
- **Culinary Storytelling:** Showcase the craft of multi-hour braised beef shanks and chuck, rich chili-infused broth (*consomé*), and griddled artisan tortillas.
- **Visual Engagement:** Use optimized hero photography and food gallery grids to build immediate appetite appeal.
- **Functional Utility:** Enable fast menu exploration, location discovery, opening hours verification, and frictionless social ordering integrations.
- **Zero-Dependency Architecture:** Clean, performant, native HTML5, modern CSS3 (Custom Properties, Flexbox, CSS Grid), and lightweight ES6+ JavaScript.

---

## Culinary Identity & Brand Concept

Birria originates from the state of Jalisco, Mexico. Traditionally made with goat and later adapted across northern Mexico and California with beef (*birria de res*), the signature cooking style involves marinating cut beef in an adobo paste of dried guajillo, ancho, and pasilla chilies, toasted cumin, Mexican oregano, cloves, cinnamon, and garlic, then gently simmering the meat for hours until it falls apart into shreds.

This platform spotlights:
- **Tacos Tradicionales:** Double-layered soft yellow corn tortillas packed with cilantro, diced white onion, and tender shredded meat.
- **Quesabirrias:** Crisp corn tortillas dipped in warm beef fat broth, griddled with melted Oaxaca and Chihuahua cheeses, folded, and served alongside piping-hot consomé for dunking.
- **Vampiros & Mulitas:** Crunchy griddled tostadas kissed with garlic butter, melted cheese crusts, and stacked meat layers.
- **Birria Ramen:** The modern border fusion featuring wavy wheat noodles simmered directly in seasoned beef consomé, crowned with soft-boiled eggs, scallions, radish, and lime.
- **Aguas Frescas:** Daily scratch-made natural coolers, including Agua de Pepino con Limón (cucumber-lime-mint) and traditional spiced Horchata with Mexican canela.

---

## Key Highlights & Menu Features

### Signature Dishes Displayed
- **Quesabirria con Consomé:** Golden crisp cheese shell, tender pulled beef, fresh lime wedges, cilantro, and warm dipping broth.
- **Birria Ramen Bowl:** Fusion street noodle bowl steeped in concentrated savory birria consomé with fresh garnishes.
- **Combo Platters:** Curated multi-item tasting plates containing tacos, consomé cups, rice, beans, and grilled jalapeños (*chiles toreados*).
- **Vampiro Tostadas:** Charred, crunchy corn tortillas topped with melted cheese, steak/birria, diced cabbage, and salsa verde.
- **Mulitas:** Stuffed double-tortilla griddle sandwiches oozing with melted cheese and seasoned meats.
- **Papa Asada con Birria:** Stuffed roasted russet potato loaded with melted butter, shredded cheese, sour cream, and spiced beef.
- **Aguas Frescas:** Horchata, Jamaica (hibiscus), and Pepino-Limón.

---

## Project Directory & Asset Inventory

UNOS TACOS Y BIRRIA/├── index.html                           # Primary single-page web storefront├── assets/│   ├── css/│   │   └── styles.css                   # Core stylesheet with variables & responsive rules│   └── images/│       ├── aguas-frescas-spread.jpg     # Wide banner showing the trio of drinks│       ├── birria-ramen-closeup.jpg     # Macro detail shot of birria ramen│       ├── crop-agua-pepino.jpg         # Product thumbnail: Cucumber-lime drink│       ├── crop-aguas-trio.jpg          # Product thumbnail: Beverage sampler│       ├── crop-birria-ramen.jpg        # Product thumbnail: Birria noodle bowl│       ├── crop-burrito.jpg             # Product thumbnail: Birria burrito│       ├── crop-caramelo.jpg            # Product thumbnail: Sonora-style caramelo│       ├── crop-combo.jpg               # Product thumbnail: Platter special│       ├── crop-consome.jpg             # Product thumbnail: Rich dipping broth│       ├── crop-consome-bowl.jpg        # Product thumbnail: Deep bowl soup│       ├── crop-mulita.jpg              # Product thumbnail: Cheesy double stack│       ├── crop-orden-birria.jpg        # Product thumbnail: Traditional plate│       ├── crop-papa-asada.jpg          # Product thumbnail: Loaded baked potato│       ├── crop-plato.jpg               # Product thumbnail: House combination│       ├── crop-quesabirria-dip.jpg     # Action shot: Dipping taco in consomé│       ├── crop-quesadilla.jpg          # Product thumbnail: Folded quesadilla│       ├── crop-quesotaco.jpg           # Product thumbnail: Single crispy cheese taco│       ├── crop-tacos.jpg               # Product thumbnail: Street taco trio│       ├── crop-tacos-lime.jpg          # Product thumbnail: Tacos with fresh lime│       ├── crop-vampiro.jpg             # Product thumbnail: Crunchy garlic vampiro│       └── hd-agua-pepino.jpg           # High-resolution glass of cucumber cooler│       └── hd-consome-cup.jpg           # High-resolution cup of broth with cilantro│       └── hd-horchata-cup.jpg          # High-resolution ice-cold horchata
---

## User Interface & Layout Architecture

The site structure follows modern single-page conversion architecture:

1. **Sticky Global Navigation (`<header>`):**
   - Brand lockup with custom typography.
   - Jump links: Menu, Combos, About Us, Story, Locations, Order Online.
   - Mobile slide-out drawer trigger with accessible ARIA toggles.
2. **Hero Showcase Section (`<section id="hero">`):**
   - High-impact visual headline declaring Jalisco authenticity.
   - Call-to-action buttons for online ordering and immediate menu jump.
   - Micro-badge highlights: *"Slow-Cooked Daily"*, *"100% Authentic Consomé"*, *"Handcrafted Tortillas"*.
3. **Featured Menu Grid (`<section id="menu">`):**
   - Categorized card grids with high-density image cards.
   - Card metadata: Item Name, Spanish description, spice indicator, price tag, and ingredient badges (Gluten-Free, Signature, Chef's Pick).
4. **Combos & Platters Section (`<section id="combos">`):**
   - Value-focused bundles pairing tacos, sides, drinks, and broth cups for families and lunch rushes.
5. **Beverage Bar (`<section id="drinks">`):**
   - Highlighting cold Aguas Frescas with refreshing summer imagery.
6. **Our Craft / Kitchen Heritage (`<section id="about">`):**
   - Step-by-step breakdown of the 6-hour braising process and adobo marinade composition.
7. **Store Locator & Hours (`<section id="contact">`):**
   - Operating hours table, Google Maps integration placeholder, direct dial phone links, and parking advice.
8. **Footer (`<footer>`):**
   - Social media links, copyright notice, allergy disclaimer, and newsletter signup.

---

## Design System & Theme Tokens

The CSS architecture is rooted in cohesive custom properties:

```css
:root {
  /* Color Palette */
  --color-primary: #C93B2B;        /* Salsa roja warm red */
  --color-primary-dark: #8F2215;   /* Deep slow-braised chili hue */
  --color-accent: #E5A93C;         /* Golden corn & melted cheese yellow */
  --color-accent-light: #FBE6B7;   /* Warm masa cream */
  --color-dark: #1E1A17;           /* Cast iron & charcoal black */
  --color-neutral: #3A3530;        /* Muted slate brown */
  --color-light: #FAF6F0;          /* Fresh flour tortilla off-white */
  --color-white: #FFFFFF;
  --color-success: #2E7D32;        /* Cilantro & lime green */

  /* Typography */
  --font-heading: 'Cinzel', 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Spacing Scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 5rem;

  /* Elevation Shadows */
  --shadow-sm: 0 2px 4px rgba(30, 26, 23, 0.08);
  --shadow-md: 0 4px 12px rgba(30, 26, 23, 0.12);
  --shadow-lg: 0 12px 28px rgba(30, 26, 23, 0.18);
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);

  /* Border Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
Responsive Breakpoints & Device AdaptabilityThe layout is tested and hardened across mobile, tablet, desktop, and ultra-wide displays:Breakpoint NameViewport WidthLayout AdaptationsMobile Narrow< 480pxSingle-column menu stack, condensed hero font, full-width touch buttons.Mobile Standard480px – 767px1–2 column adaptive cards, sticky bottom order banner.Tablet Portrait768px – 1023px2-column menu grid, visible primary navigation, horizontal combos.Desktop1024px – 1439px3–4 column food grid, split hero with photography showcase.Ultra-Wide>= 1440pxCentered 1280px max-width container, enhanced typography scale.Performance, SEO & Accessibility StandardsSemantic HTML5: Native tags (<nav>, <main>, <article>, <section>, <aside>, <footer>) ensure screen reader clarity.Image Optimization: All visual assets include explicit width and height attributes to prevent Cumulative Layout Shift (CLS). Lazy loading (loading="lazy") is enabled on all sub-fold imagery.Color Contrast: Foreground text adheres strictly to WCAG 2.1 Level AA standards (minimum contrast ratio of 4.5:1 against light and dark backdrops).Reduced Motion: Fully honors user OS accessibility preferences:CSS@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
Local Development & QuickstartTo run this application locally without installing heavy runtime frameworks:Option 1: Python Built-in ServerBash# Clone the repository
git clone [https://github.com/your-username/unos-tacos-y-birria-web.git](https://github.com/your-username/unos-tacos-y-birria-web.git)

# Navigate into the project directory
cd unos-tacos-y-birria-web

# Start a local HTTP server
python3 -m http.server 8000
Open your browser at http://localhost:8000.Option 2: Node.js serveBashnpx serve .
Option 3: VS Code Live ServerOpen the project folder in Visual Studio Code.Install the Live Server extension (ritwickdey.LiveServer).Right-click index.html and click "Open with Live Server".Deployment GuidesDeploy to GitHub PagesPush your repository to GitHub.In your repository, navigate to Settings > Pages.Under Branch, select main and root folder / (root).Click Save. Your site will be live at https://<your-username>.github.io/<repo-name>/.Deploy to VercelBashnpm install -g vercel
vercel deploy --prod
Deploy to NetlifyDrag and drop the root project folder into the Netlify Web App dashboard or deploy using the Netlify CLI:Bashnetlify deploy --prod --dir=.
Browser Compatibility MatrixBrowserSupported VersionsNotesGoogle Chrome88+Full support for CSS Grid, Variables, and WebP/JPEG assets.Mozilla Firefox85+Full support across all interactive elements.Apple Safari14+Supports flex gap and responsive image tags.Microsoft Edge88+Full Chromium parity.Mobile Safari (iOS)iOS 14+Smooth momentum scrolling and safe-area margin handling.Chrome Mobile (Android)Android 10+Fluid responsive touch targeting.Complete Menu ReferenceBelow is the verified culinary catalogue available within this application:Dish NameCategoryPrimary IngredientsRecommended PairingQuesabirriaTacos con QuesoCrisp corn tortilla, melted cheese, shredded beef, cilantro, onionHot Consomé de BirriaTaco TradicionalTacosDouble soft yellow corn tortilla, birria de res, salsa verdeJarritos / HorchataVampiroEspecialidadesCharred crunchy tostada, garlic butter, griddled cheese, beefConsomé Cup & RadishesMulitaEspecialidadesStacked double-layer tortillas, melted Chihuahua cheese, shredded meatSalsa Roja de Chile de ÁrbolBirria RamenFusion BowlsWavy noodles, rich chili-beef broth, braised beef, soft egg, scallionsLime wedges & Agua de PepinoBirria BurritoBurritosLarge flour tortilla, Mexican rice, pinto beans, melted cheese, beefSide Consomé for dunkingCarameloSonora ClassicsFlour tortilla, quesillo, shredded beef, guacamoleCharred Green Onions (Cebollitas)Papa AsadaSides & PlatesBaked potato, butter, crema, melted cheese, shredded birriaPickled red onions & jalapeñosConsomé SoloCaldos / Broths6-hour braising stock, beef drippings, cilantro, limeDunking any taco or quesadillaAgua de Pepino-LimónBebidasCrushed cucumber, Key lime juice, cane sugar, mint sprigsQuesabirrias & spicy salsasAgua de HorchataBebidasRice milk, Ceylon cinnamon, Mexican vanilla, evaporated milkRich birria ramen & hot burritosCode Style & Best PracticesBEM Methodology: CSS naming follows clean block-element-modifier principles (.menu-card, .menu-card__image, .menu-card__price--highlight).Semantic Tags: Form fields are explicitly tied to <label> tags with matching for/id values.Modular Stylesheet: styles.css is organized with a clear Table of Contents and sectional separation:Global Reset & Box-SizingCSS Custom Property DefinitionsTypography RulesHeader & Navigation SystemHero SectionMenu Grid & CardsCombo PlattersLocation & Hours LayoutFooter & AttributionMedia Queries & Print StylesContributing GuidelinesFork the repository.Create your feature branch (git checkout -b feature/new-dish-card).Commit your modifications (git commit -m 'Add new seasonal menu item').Push to your branch (git push origin feature/new-dish-card).Open a Pull Request detailing your additions and layout screenshots.License & AttributionDistributed under the MIT License. See LICENSE for more information.All culinary photography and brand assets are curated for the Unos Tacos y Birria platform demonstration.¡Buen provecho! Proudly serving authentic, slow-braised Mexican street food flavors.
