const STORE_PHONE = '51968624020'
const ORDER_STORAGE_KEY = 'pisco-nazca-order'
const AGE_STORAGE_KEY = 'pisco-nazca-age-confirmed'

const heroPromos = [
  {
    label: 'Combo destacado',
    name: 'Cerveza Corona Extra',
    detail: 'Botella 355ml, pack de 6 unidades',
    image: 'images/home-img-1.png',
  },
  {
    label: 'Ron importado',
    name: 'Flor de Cana 4 anos',
    detail: 'Anejo Oro, botella de 750ml',
    image: 'images/home-img-2.png',
  },
  {
    label: 'Whisky clasico',
    name: 'Johnnie Walker Red Label',
    detail: 'Botella de 750ml para celebraciones',
    image: 'images/home-img-3.png',
  },
  {
    label: 'Pack listo',
    name: 'Whisky Old Time + Guarana',
    detail: 'Incluye gaseosa 2L y hielo',
    image: 'images/home-img-4.png',
  },
]

const featuredProducts = [
  {
    name: 'Licor 7 Raices El Aguajal',
    detail: 'Botella de 700ml, 36 grados',
    image: 'images/dish-1.png',
    category: 'Licores',
  },
  {
    name: 'Tequila Jose Cuervo 1800',
    detail: 'Reposado, botella de 750ml',
    image: 'images/dish-2.png',
    category: 'Tequila',
  },
  {
    name: 'Whisky Jack Daniel\'s Old No. 7',
    detail: 'Botella de 750ml',
    image: 'images/dish-5.png',
    category: 'Whisky',
  },
]

const products = [
  ['Licor Tres Plumas Blue Curacao', 'Blue Curacao 700ml', 'Licores', 'images/menu-1.png'],
  ['Tequila Jose Cuervo 1800', 'Reposado, botella 750ml', 'Tequila', 'images/menu-2.png'],
  ['Licor RC El Aguajal', 'Bebida de 700ml, 22 grados', 'Licores', 'images/menu-3.png'],
  ['Flor de Cana 4 anos', 'Anejo Oro, botella 750ml', 'Ron', 'images/menu-4.png'],
  ['Whisky Jack Daniel\'s Old No. 7', 'Botella 750ml', 'Whisky', 'images/menu-5.png'],
  ['Cerveza Cusquena Rubia', 'Botella de 330ml', 'Cerveza', 'images/menu-6.png'],
  ['Vino Toro Viejo', 'Syrah Malbec 750ml', 'Vino', 'images/menu-7.png'],
  ['Absolut Vodka Original', 'Botella de 750ml', 'Vodka', 'images/menu-8.png'],
  ['Curacao Blanc Triple Sec', 'Botella de 700ml', 'Licores', 'images/menu-9.png'],
  ['Tres Plumas Frutilla', 'Curacao 700ml', 'Licores', 'images/menu-10.png'],
  ['Licor Una de Gato', 'El Aguajal, 38 grados', 'Licores', 'images/menu-11.png'],
  ['Licor Uvachado', 'El Aguajal 700ml, 14 grados', 'Licores', 'images/menu-12.png'],
  ['Licor Chuchuhuasi', 'El Aguajal 750ml', 'Licores', 'images/menu-13.png'],
  ['Whisky Grand Old Parr', '12 anos Extra Rich, botella 750ml', 'Whisky', 'images/menu-14.png'],
  ['Tres Plumas Chocolate Almendra', 'Botella de 700cc', 'Licores', 'images/menu-15.png'],
  ['Tres Plumas Cafe al Whisky', 'Botella de 750cc', 'Licores', 'images/menu-16.png'],
  ['Tres Plumas Dulce de Leche', 'Botella de 700cc', 'Licores', 'images/menu-17.png'],
  ['Tres Plumas Kiwi', 'Botella de 700ml', 'Licores', 'images/menu-18.png'],
  ['Ron Medellin Anejo', 'Botella de 750ml', 'Ron', 'images/menu-19.png'],
  ['Vat 69 Whisky', 'Botella de 700ml', 'Whisky', 'images/menu-20.png'],
  ['Vino Rio Rica', 'Red Blend tinto dulce 750ml', 'Vino', 'images/menu-21.png'],
  ['Cerveza Pilsen Callao', 'Natural y sin preservantes', 'Cerveza', 'images/menu-22.png'],
  ['Cerveza Stella Artois Lager', 'Botella de 335ml', 'Cerveza', 'images/menu-23.png'],
  ['Vodka Russkaya Pink', 'Botella de 750ml', 'Vodka', 'images/menu-24.png'],
  ['Pisco Vargas Puro', 'Botella de 750ml', 'Pisco', 'images/menu-25.png'],
  ['Pisco Ocucaje Mosto Verde', 'Botella de 750ml', 'Pisco', 'images/menu-26.png'],
  ['Pisco Tabernero Italia', 'Botella de 750ml', 'Pisco', 'images/menu-27.png'],
].map(([name, detail, category, image], index) => ({
  id: index + 1,
  name,
  detail,
  category,
  image,
}))

const selectors = {
  ageGate: document.querySelector('#ageGate'),
  confirmAge: document.querySelector('#confirmAge'),
  menuButton: document.querySelector('#menuButton'),
  nav: document.querySelector('#siteNav'),
  navLinks: document.querySelectorAll('.nav a'),
  header: document.querySelector('[data-header]'),
  heroSlider: document.querySelector('[data-hero-slider]'),
  sliderPrev: document.querySelector('[data-slider-prev]'),
  sliderNext: document.querySelector('[data-slider-next]'),
  featuredGrid: document.querySelector('[data-featured-grid]'),
  productGrid: document.querySelector('[data-product-grid]'),
  searchInput: document.querySelector('#searchInput'),
  categoryFilter: document.querySelector('#categoryFilter'),
  resultCount: document.querySelector('#resultCount'),
  clearFilters: document.querySelector('#clearFilters'),
  orderList: document.querySelector('#orderList'),
  orderEmpty: document.querySelector('#orderEmpty'),
  clearOrder: document.querySelector('#clearOrder'),
  sendOrder: document.querySelector('#sendOrder'),
  whatsappDirect: document.querySelector('#whatsappDirect'),
}

let activeSlide = 0
let order = loadOrder()

function loadOrder() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

function saveOrder() {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order))
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function createProductCard(product, variant = 'product-card') {
  const card = document.createElement('article')
  card.className = variant

  card.innerHTML = `
    <div class="${variant}__media">
      <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
    </div>
    <div class="${variant}__body">
      <div class="${variant}__meta">
        <span class="badge">${product.category}</span>
        <span class="rating" aria-label="Valoracion alta">★★★★★</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.detail}</p>
      <button class="btn btn--primary" type="button" data-add-product="${product.id}">
        Agregar al pedido
      </button>
    </div>
  `

  return card
}

function renderHero() {
  selectors.heroSlider.innerHTML = heroPromos
    .map(
      (promo, index) => `
        <article class="hero-slide ${index === activeSlide ? 'is-active' : ''}" aria-hidden="${index !== activeSlide}">
          <div class="hero-slide__content">
            <span>${promo.label}</span>
            <h3>${promo.name}</h3>
            <p>${promo.detail}</p>
            <a class="btn btn--primary" href="tel:+${STORE_PHONE}">Ordenar ahora</a>
          </div>
          <img src="${promo.image}" alt="${promo.name}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
        </article>
      `,
    )
    .join('')
}

function moveSlide(direction) {
  activeSlide = (activeSlide + direction + heroPromos.length) % heroPromos.length
  renderHero()
}

function renderFeatured() {
  selectors.featuredGrid.innerHTML = ''
  featuredProducts.forEach((product) => {
    const card = document.createElement('article')
    card.className = 'featured-card'
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
      <div>
        <span class="badge">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.detail}</p>
      </div>
    `
    selectors.featuredGrid.append(card)
  })
}

function renderCategories() {
  const categories = ['Todos', ...new Set(products.map((product) => product.category))]
  selectors.categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join('')
}

function getFilteredProducts() {
  const query = normalize(selectors.searchInput.value.trim())
  const category = selectors.categoryFilter.value

  return products.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category
    const matchesSearch = normalize(`${product.name} ${product.detail} ${product.category}`).includes(query)
    return matchesCategory && matchesSearch
  })
}

function renderProducts() {
  const filteredProducts = getFilteredProducts()
  selectors.productGrid.innerHTML = ''
  selectors.resultCount.textContent = `${filteredProducts.length} producto${filteredProducts.length === 1 ? '' : 's'}`

  if (!filteredProducts.length) {
    selectors.productGrid.innerHTML = '<p class="order-empty">No encontramos productos con esos filtros.</p>'
    return
  }

  filteredProducts.forEach((product) => {
    selectors.productGrid.append(createProductCard(product))
  })
}

function addToOrder(productId) {
  const product = products.find((item) => item.id === Number(productId))
  if (!product) return

  const existingItem = order.find((item) => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    order.push({ id: product.id, quantity: 1 })
  }

  saveOrder()
  renderOrder()
}

function removeFromOrder(productId) {
  order = order.filter((item) => item.id !== Number(productId))
  saveOrder()
  renderOrder()
}

function buildWhatsAppUrl(customMessage) {
  return `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(customMessage)}`
}

function getOrderMessage() {
  if (!order.length) {
    return 'Hola, quisiera consultar disponibilidad de productos.'
  }

  const lines = order.map((item) => {
    const product = products.find((currentProduct) => currentProduct.id === item.id)
    return `- ${item.quantity} x ${product.name}`
  })

  return `Hola, quisiera hacer este pedido:\n${lines.join('\n')}\n\nPor favor confirmar disponibilidad y delivery.`
}

function renderOrder() {
  selectors.orderList.innerHTML = ''
  selectors.orderEmpty.hidden = order.length > 0
  selectors.sendOrder.href = buildWhatsAppUrl(getOrderMessage())
  selectors.whatsappDirect.href = buildWhatsAppUrl('Hola, quisiera consultar por el catalogo de licores.')

  order.forEach((item) => {
    const product = products.find((currentProduct) => currentProduct.id === item.id)
    const row = document.createElement('li')
    row.innerHTML = `
      <span>${item.quantity} x ${product.name}</span>
      <button type="button" data-remove-product="${product.id}" aria-label="Quitar ${product.name}">Quitar</button>
    `
    selectors.orderList.append(row)
  })
}

function setupAgeGate() {
  const confirmed = localStorage.getItem(AGE_STORAGE_KEY) === 'true'
  selectors.ageGate.classList.toggle('is-hidden', confirmed)
  document.body.classList.toggle('modal-open', !confirmed)

  selectors.confirmAge.addEventListener('click', () => {
    localStorage.setItem(AGE_STORAGE_KEY, 'true')
    selectors.ageGate.classList.add('is-hidden')
    document.body.classList.remove('modal-open')
  })
}

function setupNavigation() {
  selectors.menuButton.addEventListener('click', () => {
    const isOpen = selectors.nav.classList.toggle('is-open')
    selectors.menuButton.setAttribute('aria-expanded', String(isOpen))
    document.body.classList.toggle('nav-open', isOpen)
  })

  selectors.navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      selectors.nav.classList.remove('is-open')
      selectors.menuButton.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('nav-open')
    })
  })

  const sections = [...document.querySelectorAll('main section[id]')]
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        selectors.navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
        })
      })
    },
    {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    },
  )

  sections.forEach((section) => observer.observe(section))
}

function setupEvents() {
  selectors.sliderPrev.addEventListener('click', () => moveSlide(-1))
  selectors.sliderNext.addEventListener('click', () => moveSlide(1))
  selectors.searchInput.addEventListener('input', renderProducts)
  selectors.categoryFilter.addEventListener('change', renderProducts)
  selectors.clearFilters.addEventListener('click', () => {
    selectors.searchInput.value = ''
    selectors.categoryFilter.value = 'Todos'
    renderProducts()
  })
  selectors.clearOrder.addEventListener('click', () => {
    order = []
    saveOrder()
    renderOrder()
  })

  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-product]')
    const removeButton = event.target.closest('[data-remove-product]')

    if (addButton) {
      addToOrder(addButton.dataset.addProduct)
    }

    if (removeButton) {
      removeFromOrder(removeButton.dataset.removeProduct)
    }
  })
}

function init() {
  setupAgeGate()
  setupNavigation()
  renderHero()
  renderFeatured()
  renderCategories()
  renderProducts()
  renderOrder()
  setupEvents()

  window.setInterval(() => moveSlide(1), 7000)

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {})
    })
  }
}

init()
