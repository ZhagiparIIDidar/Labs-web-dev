import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 727813,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смарт-часы Garmin Fenix 8 51 мм черно-серый',
      description: 'Будьте безграничны. Серия мультиспортивных смарт-часов с GPS fenix 8 создана для серьезных спортсменов и любителей активного отдыха, которые хотят выйти за пределы своих возможностей. С процессором Apple M4 и 16 Гб оперативной памяти, он идеально подходит для работы и развлечений.',
      price: 648457,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h0d/84988223324190.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hcc/86967765434398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h42/h3e/86967765467166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/h9b/86967765499934.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/garmin-fenix-8-51-mm-cherno-seryi-122966507/?c=750000000'
    },
    {
      id: 3,
      name: 'Телевизор Samsung UE75DU7100UXCE 191 см черный',
      description: 'Телевизор LED Samsung UE75DU7100UXCE с экраном 75 дюймов 4K UltraHD обеспечивает высокое качество картинки с реалистичной передачей деталей во время просмотра телеканалов и другого мультимедийного контента.',
      price: 529999,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hdd/64349632741406.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/hb0/85983444172830.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h99/h91/85983444238366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/h00/85983444369438.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-ue75du7100uxce-191-sm-chernyi-119247827/?c=750000000'
    },
    {
      id: 4,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Samsung Galaxy S24 Ultra 5G — флагманский смартфон с непревзойденными возможностями для тех, кто требует от устройства максимальной производительности и стиля',
      price: 566349,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h13/84963219243038.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/hfe/84963707256862.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/hd9/84963583393822.png?format=gallery-medium'
      ],
      link: 'http://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000'
    },
    {
      id: 5,
      name: 'Фотокамера Canon PowerShot G7 X Mark III черный',
      description: 'Фотокамера Canon PowerShot G7 X Mark III черный',
      price: 649532,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/hd8/64490353213470.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h62/63813277646878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h27/63813280825374.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000'
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
      price: 525212,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h34/63779861970974.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pc0/35723930.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
    },
    {
      id: 7,
      name: 'Кухонный комбайн KENWOOD Cooking Chef KCL96.004DG темно‑серый',
      description: 'Новое поколение кухонных машин Kenwood.',
      price: 949990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/84908272156702.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/pe2/64508137.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/pe2/64508138.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/pe6/64508146.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kenwood-cooking-chef-kcl96-004dg-temno-seryi-145566948/?c=750000000'
    },
    {
      id: 8,
      name: 'Робот-пылесос DREAME X50 Ultra Complete белый',
      description: 'Dreame X50 Ultra Complete — не просто робот-пылесос, а полностью автономная клининговая станция нового поколения.',
      price: 648989,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/hf5/84878521958430.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p30/pdf/48817070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/pde/48817073.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/pde/48817073.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dreame-x50-ultra-complete-belyi-137143370/?c=750000000'
    },
    {
      id: 9,
      name: 'Холодильник LG GC-B257KEHW бежевый',
      description: 'Холодильник LG GC-B257KEHW — современное решение для вашей кухни, обеспечивающее максимальную свежесть продуктов и энергетическую эффективность.',
      price: 699810,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h7e/64216248369182.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/p9f/22771326.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p9f/22771329.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc0/p9c/22771331.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-gc-b257kehw-bezhevyi-134117875/?c=750000000'
    },
    {
      id: 10,
      name: '855264 белый',
      description: 'Электромотор 24V 200W, резиновые колёса ездят без шума и проходимые, двухместное кожаное сидение, ремень безопасности, аккумулятор 24 вольт 14 ампер, рулевая рейка как у настоящих машин.',
      price: 640000,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7f/h43/64410546012254.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h49/84019312197662.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/hea/86370081439774.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/h89/86370081505310.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ninebot-kickscooter-f40-102218347/'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}