/**
 * UNOS TACOS Y BIRRIA — CUKU CAFE 1:1 INTERACTIVE ENGINE (Vanilla JS)
 * Powers:
 * 1. Complete 20-Item Authentic Menu Catalog (100% HD Restored PDF Photography)
 * 2. CUKU Cafe Horizontal Product Cards (Home Top-Sellers & Full Grouped Menu)
 * 3. Live Search ("Search your mood...") + Sticky Category Scroll & Filter
 * 4. Culinary Recipe Modal ("How It's Made", Flavor Profile, Ingredients, Protein Choice)
 * 5. Persistent Direct Order Cart (localStorage, 0% App Markup, +1 (602) 281-6840 Checkout)
 * 6. Live Phoenix MST Open/Closed Clock + Multi-Location Switcher (Phoenix, Mesa, Avondale)
 * 7. Hardware-Accelerated 3D Floating Taqueria Parallax & Card Tilt
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. AUTHENTIC MENU CATALOG (100% HD RESTORED PDF ASSETS)
     ========================================================================== */
  const MENU_ITEMS = [
    // Category 1: Quesabirrias & Tacos
    {
      id: 'quesabirria-consome-trio',
      name: '3 Quesabirria Tacos + Consomé Bowl',
      category: 'Quesabirrias & Tacos',
      categoryId: 'quesabirrias',
      price: 15.49,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/hero-quesabirria-dip.jpg',
      shortDesc: 'Crispy chili-dipped corn tortillas, melted Oaxaca cheese & 8-hour beef birria.',
      howItIsMade: 'Hand-pressed corn tortillas dipped in rich chili birria broth, griddled crisp on the plancha with melted Oaxaca & Monterey Jack cheese, stuffed with 8-hour slow-braised beef birria, and served with a steaming cup of consomé.',
      flavorProfile: 'Rich, smoky guajillo & ancho chile depth, crispy cheesy edges, and savory herbaceous broth.',
      ingredients: ['8-Hour Braised Beef Birria', 'Handmade Corn Tortillas', 'Oaxaca Cheese', 'Fresh Cilantro & White Onion', 'Rich Chile Consomé', 'Key Limes'],
      tags: ['Valley #1 Bestseller', 'Handmade Tortillas', 'Includes Consomé']
    },
    {
      id: 'quesabirria-single',
      name: 'Single Quesabirria Taco Dorado',
      category: 'Quesabirrias & Tacos',
      categoryId: 'quesabirrias',
      price: 4.75,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/crop-quesabirria-dip.jpg',
      shortDesc: 'Individual golden-crisp quesabirria taco loaded with melted cheese & birria.',
      howItIsMade: 'Griddled to a shattering golden crunch with red chile birria oil, generously layered with melted cheese and juicy shredded beef birria.',
      flavorProfile: 'Crunchy, cheesy, deeply savory with bright cilantro-onion freshness.',
      ingredients: ['Shredded Beef Birria', 'Artisanal Corn Tortilla', 'Melted Monterey Jack', 'Diced Onion & Cilantro', 'Salsa Roja'],
      tags: ['Crispy Dorado', 'Scratch Birria']
    },
    {
      id: 'quesotacos-pollo-asado',
      name: '4 Quesotacos Dorados Plate',
      category: 'Quesabirrias & Tacos',
      categoryId: 'quesabirrias',
      price: 16.99,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/quesotacos-agua-pepino.jpg',
      shortDesc: 'Four golden cheese-crusted tacos with pickled red onions, radishes & key limes.',
      howItIsMade: 'Four handmade corn tortillas seared with a golden cheese crust, filled with your choice of flame-grilled Pollo Asado, Carne Asada, or Al Pastor, garnished with crisp radishes and house pickled red onions.',
      flavorProfile: 'Smoky mesquite char, caramelized cheese crust, and bright citrus-pickled crunch.',
      ingredients: ['Choice of Asada / Pollo / Pastor', 'Seared Cheese Crust', 'Pickled Red Onions', 'Crisp Radishes', 'Key Limes', 'Cilantro'],
      tags: ['Chef Signature', '4-Taco Platter']
    },
    {
      id: 'taco-carne-asada-guac',
      name: 'Tijuanense Street Taco (Asada & Guac)',
      category: 'Quesabirrias & Tacos',
      categoryId: 'quesabirrias',
      price: 3.95,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/tacos-guacamole-closeup.jpg',
      shortDesc: 'Flame-grilled Sonora carne asada on warm handmade corn tortilla with fresh guacamole.',
      howItIsMade: 'Thick-pressed warm corn tortilla topped with mesquite-grilled carne asada, crushed Hass avocado guacamole, finely diced white onion, and fresh cilantro.',
      flavorProfile: 'Authentic Tijuana street-cart smoke balanced by creamy avocado and zesty salsa.',
      ingredients: ['Mesquite Carne Asada', 'Handmade Corn Tortilla', 'Fresh Hass Guacamole', 'White Onion', 'Cilantro', 'Lime Wedge'],
      tags: ['100% Handmade Tortilla', 'Tijuana Style']
    },
    {
      id: 'tacos-al-pastor-trio',
      name: '3 Street Tacos Trio + Fresh Horchata',
      category: 'Quesabirrias & Tacos',
      categoryId: 'quesabirrias',
      price: 14.99,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/horchata-tacos-trio.jpg',
      shortDesc: 'Three authentic street tacos paired with a 24oz cup of house cinnamon horchata.',
      howItIsMade: 'Three freshly pressed corn tortillas loaded with your choice of Adobada/Pastor, Carne Asada, or Birria, served alongside our signature iced Agua de Horchata.',
      flavorProfile: 'Savory-sweet contrast between smoky spiced taco meats and velvety cinnamon rice milk.',
      ingredients: ['3 Handmade Street Tacos', '24oz House Horchata', 'Cilantro & Onion', 'Radishes & Limes', 'House Salsas'],
      tags: ['Combo Value', 'Fan Favorite']
    },

    // Category 2: Birria Ramen & Bowls
    {
      id: 'birria-ramen-supreme',
      name: 'Signature Birria Ramen Bowl',
      category: 'Birria Ramen & Bowls',
      categoryId: 'ramen',
      price: 13.99,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/birria-ramen-closeup.jpg',
      shortDesc: 'Springy ramen noodles steeped in fiery 8-hour beef birria consomé & tender beef.',
      howItIsMade: 'Wavy artisan noodles simmered directly in our 8-hour guajillo-ancho beef birria consomé, crowned with a generous mound of shredded beef birria, melted cheese, cilantro, onions, and fresh lime.',
      flavorProfile: 'Soul-warming, rich umami chile broth with bouncy noodles and melt-in-your-mouth beef.',
      ingredients: ['Artisan Ramen Noodles', '8-Hour Beef Consomé', 'Shredded Beef Birria', 'Cilantro & White Onion', 'Fresh Lime', 'Chile Oil'],
      tags: ['Viral Phoenix Hit', 'Spicy & Savory']
    },
    {
      id: 'birria-ramen-queso-combo',
      name: 'Birria Ramen + Quesabirria Dipper Combo',
      category: 'Birria Ramen & Bowls',
      categoryId: 'ramen',
      price: 17.49,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/crop-birria-ramen.jpg',
      shortDesc: 'Full cup of hot Birria Ramen served with a crispy Quesabirria taco for dipping.',
      howItIsMade: 'Our full-sized Birria Ramen bowl paired with a golden-seared Quesabirria taco on the side so you can dunk every cheesy bite straight into the rich noodle broth.',
      flavorProfile: 'The ultimate texture contrast: crunchy cheese taco meets silky, spiced birria noodle soup.',
      ingredients: ['Full Birria Ramen Cup', '1 Crispy Quesabirria Taco', 'Oaxaca Cheese', 'Cilantro & Onion', 'Salsa Picante'],
      tags: ['Ultimate Feast', 'Bestseller']
    },
    {
      id: 'consome-birria-bowl',
      name: 'Traditional Birria En Su Jugo Bowl',
      category: 'Birria Ramen & Bowls',
      categoryId: 'ramen',
      price: 14.49,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/crop-consome-bowl.jpg',
      shortDesc: 'Traditional bowl of slow-braised beef birria in steaming consomé with handmade tortillas.',
      howItIsMade: 'Ladled piping hot from our cauldron with tender chunks of slow-simmered beef birria, aromatic chile broth, fresh onion, cilantro, and warm handmade corn tortillas on the side.',
      flavorProfile: 'Pure Jalisco & Tijuana comfort — deeply aromatic, herbal, and restorative.',
      ingredients: ['Slow-Braised Beef Birria', '16oz Rich Consomé', '3 Handmade Corn Tortillas', 'Onion, Cilantro & Limes'],
      tags: ['Authentic Recipe', 'Gluten-Free']
    },
    {
      id: 'keto-birria-cheese-bowl',
      name: 'Low-Carb Birria & Oaxaca Cheese Bowl',
      category: 'Birria Ramen & Bowls',
      categoryId: 'ramen',
      price: 13.99,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/quesabirria-plate-consome.jpg',
      shortDesc: ' Tortilla-free griddled Oaxaca cheese crust bowl filled with birria, guacamole & consomé.',
      howItIsMade: 'Melted Oaxaca cheese seared directly on the plancha and folded around tender beef birria, carne asada, fresh guacamole, pico de gallo, and a side cup of consomé.',
      flavorProfile: 'High-protein, keto-friendly indulgence with crispy caramelized cheese and rich birria.',
      ingredients: ['Crisped Oaxaca Cheese Base', 'Beef Birria or Asada', 'Fresh Guacamole', 'Cilantro & Onion', 'Side Consomé'],
      tags: ['Keto Friendly', 'Gluten-Free']
    },

    // Category 3: Vampiros & Mulitas
    {
      id: 'vampiro-sonorense',
      name: 'Vampiro Sonorense (Crispy Cheese Tostada)',
      category: 'Vampiros & Mulitas',
      categoryId: 'vampiros',
      price: 5.99,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/quesabirria-cholula-feast.jpg',
      shortDesc: 'Flame-crisped wavy corn tortilla with melted cheese crust, meat of choice & guacamole.',
      howItIsMade: 'A handmade corn tortilla toasted over open flame until crisp like a wavy tostada, blanketed with melted Oaxaca cheese, topped with smoky Carne Asada or Birria, guacamole, and pico de gallo.',
      flavorProfile: 'Audibly crunchy, smoky, creamy, and loaded with Sonora-Sinaloa street flavor.',
      ingredients: ['Flame-Crisped Corn Tortilla', 'Melted Oaxaca Cheese', 'Birria / Asada / Pastor', 'Fresh Guacamole', 'Pico de Gallo'],
      tags: ['Sonora Specialty', 'Bestseller']
    },
    {
      id: 'mulita-tijuanense',
      name: 'Mulita Tijuanense Doble Queso',
      category: 'Vampiros & Mulitas',
      categoryId: 'vampiros',
      price: 6.49,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/crop-tacos-lime.jpg',
      shortDesc: 'Two handmade corn tortillas sandwiching melted cheese, guacamole & choice of protein.',
      howItIsMade: 'Two fresh corn tortillas griddled golden on the plancha, stacked like a street-style sandwich with thick melted cheese, juicy birria or carne asada, creamy guacamole, onion, and cilantro.',
      flavorProfile: 'Double-tortilla crunch outside, molten cheese and guacamole cloud inside.',
      ingredients: ['2 Handmade Corn Tortillas', 'Double Oaxaca Cheese', 'Choice of Protein', 'Fresh Guacamole', 'Cilantro & Onion'],
      tags: ['Tijuana Classic', 'Loaded Cheese']
    },
    {
      id: 'quesadilla-gigante-birria',
      name: 'Quesadilla Gigante de Birria (with Consomé)',
      category: 'Vampiros & Mulitas',
      categoryId: 'vampiros',
      price: 14.99,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/quesabirria-plate-consome.jpg',
      shortDesc: '12-inch golden tortilla stuffed with birria & melted cheese, cut into dipping wedges.',
      howItIsMade: 'Griddled in red chile birria oil until crisp and golden, packed edge-to-edge with melted cheese and shredded beef birria, served with consomé, guacamole, and sour cream.',
      flavorProfile: 'Rich, shareable, extra-cheesy wedges made for dunking in hot consomé.',
      ingredients: ['12" Tortilla', 'Beef Birria', 'Oaxaca & Jack Cheese', '8oz Consomé Cup', 'Guacamole & Crema'],
      tags: ['Includes Consomé', 'Shareable']
    },

    // Category 4: Burritos & Tortas
    {
      id: 'burrito-birria-drowned',
      name: 'Burrito Unos (Birria & Cheese + Consomé)',
      category: 'Burritos & Tortas',
      categoryId: 'burritos',
      price: 14.49,
      bestseller: true,
      diet: 'meat',
      image: 'assets/images/menu-visual-grid.jpg',
      shortDesc: 'Toasted Sonora flour tortilla stuffed with beef birria, melted cheese, beans, rice & consomé.',
      howItIsMade: 'Warm Sonora-style flour tortilla rolled tight with 8-hour beef birria, melted cheese, Mexican rice, pinto beans, onion, cilantro, and seared on the plancha — served with a cup of dipping consomé.',
      flavorProfile: 'Hearty, toasted flour exterior with juicy birria and dunkable consomé.',
      ingredients: ['Sonora Flour Tortilla', '8-Hour Beef Birria', 'Melted Cheese', 'Rice & Pinto Beans', 'Dipping Consomé'],
      tags: ['Heavyweight Favorite', 'Includes Consomé']
    },
    {
      id: 'burrito-california-asada',
      name: 'Sonora Carne Asada & Guacamole Burrito',
      category: 'Burritos & Tortas',
      categoryId: 'burritos',
      price: 13.99,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/tacos-guacamole-closeup.jpg',
      shortDesc: 'Mesquite-grilled carne asada, crushed Hass guacamole, cheese, pico de gallo & beans.',
      howItIsMade: 'Stuffed with freshly chopped flame-grilled carne asada, house guacamole, melted Monterey Jack, pico de gallo, and creamy pinto beans inside a griddled flour tortilla.',
      flavorProfile: 'Smoky steak, cool creamy avocado, and bright tomato-lime salsa.',
      ingredients: ['Flame-Grilled Carne Asada', 'Fresh Guacamole', 'Monterey Jack Cheese', 'Pico de Gallo', 'Pinto Beans'],
      tags: ['Mesquite Grilled', 'Fresh Guac']
    },
    {
      id: 'torta-ahogada-birria',
      name: 'Torta de Birria Plancha-Pressed',
      category: 'Burritos & Tortas',
      categoryId: 'burritos',
      price: 13.99,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/quesabirria-cholula-feast.jpg',
      shortDesc: 'Artisan telera roll brushed with birria oil, pressed crisp with birria, cheese & avocado.',
      howItIsMade: 'Bakery-fresh telera bread dipped lightly in red birria broth, toasted on the flat-top with melted cheese, piled high with tender beef birria, sliced avocado, pickled onions, and consomé.',
      flavorProfile: 'Crusty, chile-toasted bread yielding to warm cheese, juicy birria, and buttery avocado.',
      ingredients: ['Artisan Telera Roll', 'Shredded Beef Birria', 'Melted Oaxaca Cheese', 'Fresh Avocado', 'Pickled Red Onions', 'Consomé'],
      tags: ['Bakery Telera', 'Includes Consomé']
    },
    {
      id: 'taquiza-family-box',
      name: 'La Taquiza Family Fiesta Pack (10 Tacos)',
      category: 'Burritos & Tortas',
      categoryId: 'burritos',
      price: 38.99,
      bestseller: false,
      diet: 'meat',
      image: 'assets/images/menu-board-store.jpg',
      shortDesc: '6 Quesabirrias + 4 Street Tacos + 2 Large Consomés + Chips, Guac & Salsas.',
      howItIsMade: 'Built for family tables and Phoenix game days: six crispy Quesabirria tacos, four handmade street tacos (Asada/Pastor/Pollo), two large bowls of hot consomé, pickled onions, radishes, limes, and salsa bar.',
      flavorProfile: 'A complete Tijuana-Sonora taqueria feast ready to share.',
      ingredients: ['6 Quesabirria Tacos', '4 Street Tacos', '2 Large Consomé Bowls', 'Radishes, Pickled Onions & Limes', 'Salsa Roja & Verde'],
      tags: ['Feeds 3–4', '0% Markup Direct']
    },

    // Category 5: Aguas Frescas & Drinks
    {
      id: 'agua-pepino-limon',
      name: 'Agua Fresca de Pepino con Limón (24oz)',
      category: 'Aguas Frescas & Drinks',
      categoryId: 'drinks',
      price: 4.99,
      bestseller: true,
      diet: 'veg',
      image: 'assets/images/crop-agua-pepino.jpg',
      shortDesc: 'Fresh-blended cucumber & key lime agua fresca poured over ice with crisp cucumber ribbons.',
      howItIsMade: 'Hand-crafted daily in-house by blending garden-fresh cucumbers, freshly squeezed key lime juice, pure cane sugar, and filtered water — served with real sliced cucumber ribbons inside.',
      flavorProfile: 'Ultra-refreshing, crisp, citrusy, and the ultimate cooling match for hot birria.',
      ingredients: ['Fresh Garden Cucumbers', 'Key Lime Juice', 'Pure Cane Sugar', 'Purified Ice Water', 'Cucumber Ribbons'],
      tags: ['100% Natural Fruit', 'Bestseller']
    },
    {
      id: 'agua-horchata-artesanal',
      name: 'Agua de Horchata Artesanal (24oz)',
      category: 'Aguas Frescas & Drinks',
      categoryId: 'drinks',
      price: 4.99,
      bestseller: true,
      diet: 'veg',
      image: 'assets/images/aguas-frescas-spread.jpg',
      shortDesc: 'Velvety house-steeped long-grain rice drink with Mexican canela cinnamon & vanilla.',
      howItIsMade: 'Soaked overnight with long-grain white rice, whole Mexican Ceylon cinnamon sticks (canela), a touch of vanilla bean, and creamy milk, served ice-cold.',
      flavorProfile: 'Creamy, aromatic cinnamon warmth with a smooth, refreshing finish.',
      ingredients: ['Long-Grain Rice', 'Mexican Canela Cinnamon', 'Vanilla Bean', 'Evaporated & Condensed Milk Touch', 'Crushed Ice'],
      tags: ['House Recipe', 'Vegetarian']
    },
    {
      id: 'agua-jamaica-fresa-pina',
      name: 'Aguas Frescas Flight (Jamaica, Fresa o Piña)',
      category: 'Aguas Frescas & Drinks',
      categoryId: 'drinks',
      price: 4.99,
      bestseller: false,
      diet: 'veg',
      image: 'assets/images/crop-aguas-trio.jpg',
      shortDesc: 'Choice of steeped Hibiscus Jamaica, Fresh Strawberry Fresa, or Golden Pineapple.',
      howItIsMade: 'Brewed and blended from whole hibiscus flowers and ripe seasonal fruit every morning in our Phoenix kitchen — zero artificial syrups or powders.',
      flavorProfile: 'Vibrant, sun-ripened tropical fruit refreshment.',
      ingredients: ['Whole Hibiscus / Fresh Strawberries / Pineapple', 'Pure Cane Sugar', 'Filtered Water', 'Crushed Ice'],
      tags: ['Made Fresh Daily', 'Vegan']
    },
    {
      id: 'mexican-coca-cola-vidrio',
      name: 'Ice-Cold Mexican Glass Bottle Soda',
      category: 'Aguas Frescas & Drinks',
      categoryId: 'drinks',
      price: 3.75,
      bestseller: false,
      diet: 'veg',
      image: 'assets/images/horchata-tacos-trio.jpg',
      shortDesc: 'Imported cane-sugar Mexican Coca-Cola, Sidral Mundet, Sangria Señorial, or Jarritos.',
      howItIsMade: 'Pulled straight from our sub-zero ice chest in classic glass bottles sweetened with 100% pure Mexican cane sugar.',
      flavorProfile: 'Crisp, effervescent cane-sugar caramel bite.',
      ingredients: ['100% Cane Sugar', 'Carbonated Water', 'Imported Glass Bottle'],
      tags: ['Imported Glass Bottle', 'Ice Cold']
    }
  ];

  /* ==========================================================================
     2. VALLEY LOCATIONS DATA (FOR CUKU LOCATION SWITCHER)
     ========================================================================== */
  const LOCATIONS_DATA = {
    phoenix: {
      name: 'Unos Tacos Phoenix Flagship',
      subtitle: 'West Thomas Road — Maryvale / West Valley',
      address: '7502 W Thomas Rd Ste 1, Phoenix, AZ 85033',
      hours: 'Sun–Thu: 9:00 AM – 10:00 PM | Fri–Sat: 9:00 AM – 11:00 PM (MST)',
      cost: '$12 – $18 for one • $28 for two (approx.)',
      phone: '+1 (602) 281-6840',
      phoneDial: 'tel:+16022816840',
      image: 'assets/images/storefront-sunny.jpg',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=7502+W+Thomas+Rd+Ste+1+Phoenix+AZ+85033'
    },
    mesa: {
      name: 'Unos Tacos Mesa Hub',
      subtitle: 'East Valley Kitchen & Counter Pickup',
      address: 'Mesa Boulevard Corridor (Call Phoenix Dispatch for Daily Window)',
      hours: 'Sun–Thu: 9:00 AM – 10:00 PM | Fri–Sat: 9:00 AM – 11:00 PM (MST)',
      cost: '$12 – $18 for one • Catering Trays Available',
      phone: '+1 (602) 281-6840',
      phoneDial: 'tel:+16022816840',
      image: 'assets/images/storefront-facade.jpg',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=7502+W+Thomas+Rd+Ste+1+Phoenix+AZ+85033'
    },
    avondale: {
      name: 'Unos Tacos Avondale Hub',
      subtitle: 'Southwest Valley Taqueria & Taquiza Hub',
      address: 'Avondale / West Valley Corridor (Flagship Kitchen: 7502 W Thomas Rd)',
      hours: 'Sun–Thu: 9:00 AM – 10:00 PM | Fri–Sat: 9:00 AM – 11:00 PM (MST)',
      cost: '$12 – $18 for one • Family Packs Ready in 15 Mins',
      phone: '+1 (602) 281-6840',
      phoneDial: 'tel:+16022816840',
      image: 'assets/images/storefront-corner.jpg',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=7502+W+Thomas+Rd+Ste+1+Phoenix+AZ+85033'
    }
  };

  /* ==========================================================================
     3. PERSISTENT CART STATE (localStorage)
     ========================================================================== */
  const CART_KEY = 'unos_tacos_cuku_cart_v2';
  let cart = [];

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      cart = raw ? JSON.parse(raw) : [];
    } catch (e) {
      cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
      // ignore storage errors
    }
    updateCartUI();
  }

  function addToCart(itemId, proteinChoice) {
    const item = MENU_ITEMS.find((m) => m.id === itemId);
    if (!item) return;
    const protein = proteinChoice || 'Beef Birria (Signature)';
    const cartKey = `${item.id}__${protein}`;
    const existing = cart.find((c) => c.cartKey === cartKey);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        cartKey,
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        protein,
        qty: 1
      });
    }
    saveCart();
    showToast(`Added "${item.name}" to your Direct Order!`);
  }

  function changeCartQty(cartKey, delta) {
    const idx = cart.findIndex((c) => c.cartKey === cartKey);
    if (idx === -1) return;
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) {
      cart.splice(idx, 1);
    }
    saveCart();
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = totalCount;
    });

    const listEl = document.getElementById('cuku-cart-items-list');
    const subtotalEl = document.getElementById('cuku-cart-subtotal');
    const savingsEl = document.getElementById('cuku-cart-savings');
    const summaryNoteEl = document.getElementById('cuku-cart-voice-note');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (savingsEl) savingsEl.textContent = `$${(subtotal * 0.22).toFixed(2)}`;

    if (!listEl) return;

    if (cart.length === 0) {
      listEl.innerHTML = `
        <div style="text-align:center; padding: 2.5rem 1rem; color: rgba(78,46,26,0.65);">
          <p style="font-family: var(--font-display); font-size: 1.1rem; color: var(--color-deep-espresso); margin-bottom: 0.35rem;">Your Direct Order Bag is Empty</p>
          <p style="font-size: 0.82rem;">Tap <strong>+ Order</strong> on any Quesabirria, Birria Ramen, or Agua Fresca to build your counter pickup order with 0% third-party markup.</p>
        </div>
      `;
      if (summaryNoteEl) summaryNoteEl.textContent = 'No items selected yet.';
      return;
    }

    listEl.innerHTML = cart
      .map(
        (item) => `
        <div class="cuku-cart-item">
          <img src="${item.image}" alt="${item.name}" class="hd-photo" />
          <div style="flex:1; min-width:0;">
            <div style="font-family:var(--font-display); font-weight:700; font-size:0.86rem; color:var(--color-deep-espresso); line-height:1.2;">${item.name}</div>
            <div style="font-size:0.72rem; color:rgba(78,46,26,0.7); margin-top:2px;">${item.protein}</div>
            <div style="font-size:0.82rem; font-weight:800; color:var(--color-honey-gold); margin-top:3px;">$${(item.price * item.qty).toFixed(2)}</div>
          </div>
          <div style="display:flex; align-items:center; gap:0.35rem;">
            <button type="button" data-cart-dec="${item.cartKey}" style="width:28px; height:28px; border-radius:6px; background:#fff; border:1px solid var(--color-macrame-sand); font-weight:700;">−</button>
            <span style="font-size:0.82rem; font-weight:700; min-width:18px; text-align:center;">${item.qty}</span>
            <button type="button" data-cart-inc="${item.cartKey}" style="width:28px; height:28px; border-radius:6px; background:var(--color-button-primary); color:#fff; font-weight:700;">+</button>
          </div>
        </div>
      `
      )
      .join('');

    if (summaryNoteEl) {
      summaryNoteEl.textContent = cart.map((c) => `${c.qty}x ${c.name}`).join(', ');
    }
  }

  /* ==========================================================================
     4. RENDER CUKU PRODUCT CARD (EXACT HORIZONTAL CUKU CARD MARKUP)
     ========================================================================== */
  function createCukuProductCardHTML(item) {
    const isMeat = item.diet === 'meat';
    return `
      <article class="cuku-product-card" data-tilt-card data-item-id="${item.id}">
        <div class="cuku-product-thumb" data-open-modal="${item.id}" title="Inspect ${item.name} recipe & details">
          <img src="${item.image}" alt="${item.name}" loading="lazy" class="hd-photo" />
          <div class="cuku-diet-dot-box ${isMeat ? 'meat' : ''}" title="${isMeat ? 'Authentic Meat Dish' : '100% Vegetarian / Fresh'}">
            <span></span>
          </div>
        </div>
        <div class="cuku-product-info">
          <div class="cuku-product-title-row">
            <h3 class="cuku-product-title" data-open-modal="${item.id}">${item.name}</h3>
            ${item.bestseller ? '<span class="cuku-bestseller-pill">Bestseller</span>' : ''}
          </div>
          <p class="cuku-product-cat">${item.category}</p>
          <p class="cuku-product-desc-short">${item.shortDesc}</p>
          <div class="cuku-product-bottom">
            <span class="cuku-product-price">$${item.price.toFixed(2)}</span>
            <div class="cuku-product-actions">
              <button type="button" class="cuku-info-btn" data-open-modal="${item.id}">Recipe</button>
              <button type="button" class="cuku-order-mini-btn" data-quick-add="${item.id}">+ Order</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  /* ==========================================================================
     5. HOME PAGE TOP-SELLERS & DEDICATED MENU PAGE RENDERING
     ========================================================================== */
  function renderHomeTopSellers() {
    const container = document.getElementById('cuku-top-sellers-grid');
    if (!container) return;
    const topItems = MENU_ITEMS.filter((i) => i.bestseller).slice(0, 8);
    container.innerHTML = topItems.map(createCukuProductCardHTML).join('');
  }

  function renderDedicatedMenuPage(activeCatId = 'all', searchQuery = '') {
    const wrapper = document.getElementById('cuku-menu-sections-wrapper');
    if (!wrapper) return;

    const q = searchQuery.trim().toLowerCase();
    const categories = [
      { id: 'quesabirrias', title: 'Quesabirrias & Tacos' },
      { id: 'ramen', title: 'Birria Ramen & Bowls' },
      { id: 'vampiros', title: 'Vampiros & Mulitas' },
      { id: 'burritos', title: 'Burritos, Tortas & Fiesta Packs' },
      { id: 'drinks', title: 'Aguas Frescas & Drinks' }
    ];

    let totalRendered = 0;
    const htmlBlocks = categories
      .filter((cat) => activeCatId === 'all' || cat.id === activeCatId)
      .map((cat) => {
        const items = MENU_ITEMS.filter((item) => {
          const matchesCat = item.categoryId === cat.id;
          if (!matchesCat) return false;
          if (!q) return true;
          return (
            item.name.toLowerCase().includes(q) ||
            item.shortDesc.toLowerCase().includes(q) ||
            item.howItIsMade.toLowerCase().includes(q) ||
            item.ingredients.some((ing) => ing.toLowerCase().includes(q)) ||
            item.tags.some((t) => t.toLowerCase().includes(q))
          );
        });

        if (items.length === 0) return '';
        totalRendered += items.length;

        return `
          <div class="cuku-menu-category-block" id="cat-${cat.id}">
            <div class="cuku-menu-category-header">
              <h2>${cat.title}</h2>
              <span class="cuku-menu-category-count">${items.length} items</span>
            </div>
            <div class="cuku-menu-grid">
              ${items.map(createCukuProductCardHTML).join('')}
            </div>
          </div>
        `;
      })
      .join('');

    if (totalRendered === 0) {
      wrapper.innerHTML = `
        <div style="text-align:center; padding: 4rem 1rem; background: var(--color-soft-beige); border-radius: 1.25rem;">
          <h3 style="font-size:1.35rem; margin-bottom:0.5rem;">No matching creations found</h3>
          <p style="font-size:0.9rem; color:rgba(78,46,26,0.75); margin-bottom:1.25rem;">Try searching for "Quesabirria", "Ramen", "Vampiro", "Horchata", or "Guacamole".</p>
          <button type="button" id="cuku-reset-search-btn" class="cuku-order-mini-btn" style="padding:0.55rem 1.25rem; font-size:0.85rem;">Show All 20 Creations</button>
        </div>
      `;
      const resetBtn = document.getElementById('cuku-reset-search-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const sInput = document.getElementById('cuku-menu-search-input');
          if (sInput) sInput.value = '';
          setActiveCategoryPill('all');
          renderDedicatedMenuPage('all', '');
        });
      }
    } else {
      wrapper.innerHTML = htmlBlocks;
    }

    init3DTiltCards();
  }

  function setActiveCategoryPill(catId) {
    document.querySelectorAll('[data-cat-pill]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-cat-pill') === catId);
    });
  }

  /* ==========================================================================
     6. CULINARY RECIPE MODAL ("HOW IT IS MADE", FLAVOR NOTES, INGREDIENTS)
     ========================================================================== */
  function openCulinaryModal(itemId) {
    const item = MENU_ITEMS.find((m) => m.id === itemId);
    const modal = document.getElementById('cuku-culinary-modal');
    const content = document.getElementById('cuku-culinary-modal-content');
    if (!item || !modal || !content) return;

    const isDrink = item.categoryId === 'drinks';

    content.innerHTML = `
      <div class="cuku-modal-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="hd-photo" />
        <button type="button" class="cuku-modal-close" data-close-modal aria-label="Close modal">✕</button>
      </div>
      <div class="cuku-modal-body">
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.5rem;">
          <span class="cuku-bestseller-pill">${item.category}</span>
          ${item.tags.map((t) => `<span style="font-size:10px; font-weight:700; padding:0.15rem 0.55rem; border-radius:9999px; background:var(--color-soft-beige); color:var(--color-rich-coffee);">${t}</span>`).join('')}
        </div>
        <div style="display:flex; align-items:baseline; justify-content:space-between; gap:1rem; margin-bottom:0.85rem;">
          <h3 style="font-size:1.45rem; color:var(--color-deep-espresso);">${item.name}</h3>
          <span style="font-size:1.35rem; font-weight:800; color:var(--color-honey-gold); flex-shrink:0;">$${item.price.toFixed(2)}</span>
        </div>

        <div style="background:rgba(227,213,200,0.45); border-radius:0.85rem; padding:0.9rem; margin-bottom:0.85rem; border:1px solid rgba(196,179,154,0.5);">
          <h4 style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-honey-gold); margin-bottom:0.3rem;">How It Is Made</h4>
          <p style="font-size:0.86rem; color:var(--color-deep-espresso); line-height:1.55;">${item.howItIsMade}</p>
        </div>

        <div style="margin-bottom:0.9rem;">
          <h4 style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-rich-coffee); margin-bottom:0.25rem;">Flavor Profile & Tasting Notes</h4>
          <p style="font-size:0.85rem; color:rgba(42,26,15,0.82); font-style:italic;">"${item.flavorProfile}"</p>
        </div>

        <div style="margin-bottom:1.1rem;">
          <h4 style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-rich-coffee); margin-bottom:0.4rem;">Key Fresh Ingredients</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
            ${item.ingredients.map((ing) => `<span style="font-size:0.74rem; padding:0.25rem 0.6rem; border-radius:8px; background:var(--color-soft-beige); color:var(--color-deep-espresso); font-weight:600;">• ${ing}</span>`).join('')}
          </div>
        </div>

        ${
          !isDrink
            ? `
          <div style="margin-bottom:1.2rem;">
            <label for="modal-protein-select" style="display:block; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-deep-espresso); margin-bottom:0.35rem;">Select Preparation / Protein:</label>
            <select id="modal-protein-select" style="width:100%; padding:0.65rem 0.85rem; border-radius:0.65rem; border:1px solid var(--color-macrame-sand); background:#fff; font-weight:600; color:var(--color-deep-espresso);">
              <option value="8-Hour Beef Birria (Signature)">8-Hour Beef Birria (Signature)</option>
              <option value="Mesquite Carne Asada">Mesquite Carne Asada</option>
              <option value="Adobada / Al Pastor">Adobada / Al Pastor</option>
              <option value="Flame-Grilled Pollo Asado">Flame-Grilled Pollo Asado</option>
            </select>
          </div>
        `
            : `<input type="hidden" id="modal-protein-select" value="Freshly Prepared Daily" />`
        }

        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button type="button" id="modal-confirm-add-btn" class="cuku-order-mini-btn" style="flex:1; padding:0.85rem 1.25rem; font-size:0.92rem; border-radius:9999px;">
            + Add to Direct Order ($${item.price.toFixed(2)})
          </button>
          <a href="tel:+16022816840" class="cuku-info-btn" style="padding:0.85rem 1.15rem; border-radius:9999px; display:inline-flex; align-items:center; gap:0.35rem; font-size:0.85rem;">
            📞 Call (602) 281-6840
          </a>
        </div>
      </div>
    `;

    modal.classList.add('is-open');

    const confirmBtn = document.getElementById('modal-confirm-add-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        const sel = document.getElementById('modal-protein-select');
        addToCart(item.id, sel ? sel.value : 'Signature Preparation');
        modal.classList.remove('is-open');
      });
    }
  }

  /* ==========================================================================
     7. LIVE PHOENIX MST CLOCK & LOCATION SWITCHER
     ========================================================================== */
  function updatePhoenixStatus() {
    try {
      const now = new Date();
      // Phoenix AZ is UTC-7 year-round (America/Phoenix, no DST)
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
      const phxDate = new Date(utcMs - 7 * 3600000);
      const day = phxDate.getDay(); // 0 Sun .. 6 Sat
      const hour = phxDate.getHours();
      const mins = phxDate.getMinutes();
      const decHour = hour + mins / 60;

      const isWeekend = day === 5 || day === 6; // Fri or Sat
      const closeHour = isWeekend ? 23 : 22;
      const isOpen = decHour >= 9 && decHour < closeHour;

      const closeLabel = isWeekend ? '11:00 PM' : '10:00 PM';
      const statusText = isOpen
        ? `Open Now in Phoenix • Until ${closeLabel} MST`
        : `Opens at 9:00 AM MST • Phoenix Flagship`;

      document.querySelectorAll('[data-mst-status-text]').forEach((el) => {
        el.textContent = statusText;
      });
      document.querySelectorAll('[data-mst-dot]').forEach((dot) => {
        dot.classList.toggle('closed', !isOpen);
      });
    } catch (e) {
      // Fallback
    }
  }

  function initLocationSwitcher() {
    const tabs = document.querySelectorAll('[data-loc-tab]');
    if (!tabs.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const key = tab.getAttribute('data-loc-tab');
        const data = LOCATIONS_DATA[key];
        if (!data) return;

        tabs.forEach((t) => t.classList.toggle('active', t === tab));

        const imgEl = document.getElementById('loc-display-img');
        const nameEl = document.getElementById('loc-display-name');
        const subEl = document.getElementById('loc-display-sub');
        const addrEl = document.getElementById('loc-display-address');
        const hoursEl = document.getElementById('loc-display-hours');
        const costEl = document.getElementById('loc-display-cost');
        const mapBtn = document.getElementById('loc-display-map-url');

        if (imgEl) imgEl.src = data.image;
        if (nameEl) nameEl.textContent = data.name;
        if (subEl) subEl.textContent = data.subtitle;
        if (addrEl) addrEl.textContent = data.address;
        if (hoursEl) hoursEl.textContent = data.hours;
        if (costEl) costEl.textContent = data.cost;
        if (mapBtn) mapBtn.href = data.mapsUrl;
      });
    });
  }

  /* ==========================================================================
     8. 3D PARALLAX & CARD TILT ENGINE
     ========================================================================== */
  function init3DTiltCards() {
    if (window.matchMedia('(max-width: 767px)').matches) return;
    document.querySelectorAll('[data-tilt-card]').forEach((card) => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = 'true';
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-2px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  function initAmbient3DParallax() {
    const items = document.querySelectorAll('.floating-3d-item');
    if (!items.length) return;
    window.addEventListener(
      'mousemove',
      (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        items.forEach((el, idx) => {
          const depth = (idx + 1) * 6;
          el.style.marginLeft = `${(nx * depth).toFixed(1)}px`;
          el.style.marginTop = `${(ny * depth).toFixed(1)}px`;
        });
      },
      { passive: true }
    );
  }

  /* ==========================================================================
     9. TOAST NOTIFICATION HELPER
     ========================================================================== */
  function showToast(msg) {
    let toast = document.getElementById('cuku-live-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cuku-live-toast';
      toast.style.cssText =
        'position:fixed; bottom:20px; right:20px; z-index:9999; background:var(--color-deep-espresso); color:#fff; padding:0.75rem 1.25rem; border-radius:9999px; font-size:0.84rem; font-weight:600; box-shadow:var(--shadow-warm-lg); border:1px solid var(--color-honey-gold); transition:all 0.3s ease; opacity:0; transform:translateY(12px); pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
    }, 2400);
  }

  /* ==========================================================================
     10. GLOBAL INITIALIZATION & EVENT DELEGATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Hide Preloader after 0.85s
    const preloader = document.getElementById('cuku-preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('is-hidden');
      }, 820);
    }

    // 2. Scroll Progress & Header State
    const header = document.getElementById('cuku-header');
    const progressBar = document.getElementById('scroll-progress-bar');

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (header && !header.classList.contains('header-solid')) {
        header.classList.toggle('is-scrolled', scrollY > 40);
      }
      if (progressBar) {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docH > 0 ? Math.min(100, (scrollY / docH) * 100) : 0;
        progressBar.style.width = `${pct}%`;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 3. Load Cart & Render Product Grids
    loadCart();
    renderHomeTopSellers();

    // Check URL hash or query param on menu.html
    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('cat') || 'all';
    if (document.getElementById('cuku-menu-sections-wrapper')) {
      setActiveCategoryPill(initialCat);
      renderDedicatedMenuPage(initialCat, '');
    }

    updateCartUI();
    updatePhoenixStatus();
    setInterval(updatePhoenixStatus, 60000);
    initLocationSwitcher();
    init3DTiltCards();
    initAmbient3DParallax();

    // 4. Category Pills & Search on menu.html
    let currentCat = initialCat;
    const searchInput = document.getElementById('cuku-menu-search-input');

    document.querySelectorAll('[data-cat-pill]').forEach((pill) => {
      pill.addEventListener('click', () => {
        currentCat = pill.getAttribute('data-cat-pill') || 'all';
        setActiveCategoryPill(currentCat);
        renderDedicatedMenuPage(currentCat, searchInput ? searchInput.value : '');
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        renderDedicatedMenuPage(currentCat, searchInput.value);
      });
    }

    // Category horizontal scroll buttons
    const catTrack = document.getElementById('cuku-cat-pills-track');
    const scrollLeftBtn = document.getElementById('cuku-cat-scroll-left');
    const scrollRightBtn = document.getElementById('cuku-cat-scroll-right');
    if (catTrack && scrollLeftBtn && scrollRightBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        catTrack.scrollBy({ left: -220, behavior: 'smooth' });
      });
      scrollRightBtn.addEventListener('click', () => {
        catTrack.scrollBy({ left: 220, behavior: 'smooth' });
      });
    }

    // 5. Global Click Delegation (Modals, Quick Add, Cart Drawer, Mobile Menu)
    document.body.addEventListener('click', (e) => {
      const quickAddBtn = e.target.closest('[data-quick-add]');
      if (quickAddBtn) {
        e.preventDefault();
        addToCart(quickAddBtn.getAttribute('data-quick-add'));
        return;
      }

      const openModalEl = e.target.closest('[data-open-modal]');
      if (openModalEl) {
        e.preventDefault();
        openCulinaryModal(openModalEl.getAttribute('data-open-modal'));
        return;
      }

      if (
        e.target.closest('[data-close-modal]') ||
        e.target.id === 'cuku-culinary-modal'
      ) {
        const modal = document.getElementById('cuku-culinary-modal');
        if (modal) modal.classList.remove('is-open');
        return;
      }

      // Cart Drawer Open / Close
      if (e.target.closest('[data-open-cart]')) {
        e.preventDefault();
        const cartDrawer = document.getElementById('cuku-cart-backdrop');
        if (cartDrawer) cartDrawer.classList.add('is-open');
        return;
      }
      if (
        e.target.closest('[data-close-cart]') ||
        e.target.id === 'cuku-cart-backdrop'
      ) {
        const cartDrawer = document.getElementById('cuku-cart-backdrop');
        if (cartDrawer) cartDrawer.classList.remove('is-open');
        return;
      }

      // Cart Qty
      const incBtn = e.target.closest('[data-cart-inc]');
      if (incBtn) {
        changeCartQty(incBtn.getAttribute('data-cart-inc'), 1);
        return;
      }
      const decBtn = e.target.closest('[data-cart-dec]');
      if (decBtn) {
        changeCartQty(decBtn.getAttribute('data-cart-dec'), -1);
        return;
      }

      // Mobile Menu Drawer
      if (e.target.closest('[data-open-mobile-nav]')) {
        const mob = document.getElementById('cuku-mobile-drawer');
        if (mob) mob.classList.add('is-open');
        return;
      }
      if (
        e.target.closest('[data-close-mobile-nav]') ||
        e.target.id === 'cuku-mobile-drawer'
      ) {
        const mob = document.getElementById('cuku-mobile-drawer');
        if (mob) mob.classList.remove('is-open');
        return;
      }
    });
  });
})();
