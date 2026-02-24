import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

@Injectable({
    providedIn:"root"
})

export class ProductService{

    //data
    private categories:Category[]=[
        {id:1, name:"category 1"},
        {id:2, name:"category 2"},
        {id:3, name:"category 3"},
        {id:4, name:"category 4"},
    ]
    private products:Product[]=[
  {
    id: 1, cId: 1,
    name: "Huawei P9 Lite Mini",
    description: "Компактный смартфон для повседневных задач",
    price: 65000,
    rating: 4,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/haf/h9a/63761420550174.jpg?format=gallery-medium",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/huawei-p9-lite-mini-zolotistyi-1003351/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 8
  },
  {
    id: 2, cId: 1,
    name: "Xiaomi 14T Pro 12/512GB",
    description: "Мощный флагман с большим объемом памяти",
    price: 499000,
    rating: 5,
    mainImage: "https://resources.cdn-kaspi.kz/img/m/p/p01/p25/28223600.jpg?format=gallery-medium",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/xiaomi-14t-pro-12-gb-512-gb-chernyi-podarok-135749380/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 21
  },
  {
    id: 3, cId: 1,
    name: "LG G6 64GB",
    description: "Надежный смартфон с качественным экраном",
    price: 90000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/lg-g6-64gb-seryi-1003061/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 6
  },
  {
    id: 4, cId: 1,
    name: "HONOR X9d 8/256GB",
    description: "Современный смартфон с большим экраном",
    price: 189000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/honor-x9d-8-gb-256-gb-krasnyi-147615399/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 14
  },
  {
    id: 5, cId: 1,
    name: "OPPO Reno5 Lite 8/128GB",
    description: "Стильный смартфон с хорошей автономностью",
    price: 159000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/oppo-reno5-lite-cph2205-8-gb-128-gb-fioletovyi-101613508/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 10
  },
  {
    id: 6, cId: 1,
    name: "HONOR X8c 8/256GB",
    description: "Легкий и быстрый смартфон на каждый день",
    price: 175000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/honor-x8c-8-gb-256-gb-belyi-vneshnii-akkumuljator-140703988/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 11
  },
  {
    id: 7, cId: 1,
    name: "OPPO Reno 5 Lite",
    description: "Смартфон с хорошей камерой и дизайном",
    price: 149000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/oppo-reno-5-lite-8-gb-128-gb-fioletovyi-101283176/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 7
  },
  {
    id: 8, cId: 1,
    name: "HONOR X9d 8/256GB Beige",
    description: "Стильный смартфон с большим аккумулятором",
    price: 189000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/honor-x9d-8-gb-256-gb-bezhevyi-147373993/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 9
  },
  {
    id: 9, cId: 1,
    name: "Xiaomi Redmi 15C NFC 8/256GB",
    description: "Доступный смартфон с NFC",
    price: 129000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/xiaomi-redmi-15c-nfc-8-gb-256-gb-zelenyi-podarok-144902341/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 13
  },
  {
    id: 10, cId: 1,
    name: "Samsung Galaxy A26 5G 8/256GB",
    description: "Надежный смартфон с поддержкой 5G",
    price: 219000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-a26-5g-8-gb-256-gb-zelenyi-podarok-136685738/",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 18
  }
  ,
  {
    id: 11, cId: 2,
    name: "Мужская куртка зимняя",
    description: "Теплая зимняя куртка для повседневной носки",
    price: 42000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 16
  },
  {
    id: 12, cId: 2,
    name: "Женское пальто классическое",
    description: "Элегантное пальто для осени и весны",
    price: 55000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 22
  },
  {
    id: 13, cId: 2,
    name: "Худи унисекс",
    description: "Удобное худи из хлопка",
    price: 18000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 11
  },
  {
    id: 14, cId: 2,
    name: "Футболка базовая",
    description: "Классическая футболка на каждый день",
    price: 7000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 9
  },
  {
    id: 15, cId: 2,
    name: "Джинсы мужские прямые",
    description: "Классические джинсы из плотного денима",
    price: 25000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 14
  },
  {
    id: 16, cId: 2,
    name: "Джинсы женские высокая посадка",
    description: "Модные джинсы с высокой талией",
    price: 27000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 19
  },
  {
    id: 17, cId: 2,
    name: "Спортивный костюм",
    description: "Комфортный костюм для спорта и отдыха",
    price: 32000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 13
  },
  {
    id: 18, cId: 2,
    name: "Свитер шерстяной",
    description: "Теплый свитер для холодной погоды",
    price: 23000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 17
  },
  {
    id: 19, cId: 2,
    name: "Платье повседневное",
    description: "Легкое платье для ежедневной носки",
    price: 29000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 12
  },
  {
    id: 20, cId: 2,
    name: "Рубашка классическая",
    description: "Классическая рубашка для работы и мероприятий",
    price: 21000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 20
  },
  {
    id: 21, cId: 4, 
    name: "Кофе растворимый Nescafe Gold 190 г", 
    description: "Натуральный растворимый сублимированный кофе с добавлением молотых зерен арабики", 
    price: 3650, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 1205
  },
  {
    id: 22, cId: 4, 
    name: "Чай черный Richard Royal Ceylon 100 пакетиков", 
    description: "Классический цейлонский черный чай в индивидуальных сашетах", 
    price: 2450, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 890
  },
  {
    id: 23, cId: 4, 
    name: "Масло подсолнечное Шедевр 5 л", 
    description: "Рафинированное дезодорированное подсолнечное масло высшего сорта", 
    price: 3800, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 450
  },
  {
    id: 24, cId: 4, 
    name: "Макаронные изделия Султан Рожки 400 г", 
    description: "Изделия из твердых сортов пшеницы, группа А", 
    price: 285, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 320
  },
  {
    id: 25, cId: 4, 
    name: "Шоколад Казахстанский 100 г", 
    description: "Легендарный классический молочный шоколад фабрики Рахат", 
    price: 550, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 2100
  },
  {
    id: 26, cId: 4, 
    name: "Рис Баракат Элита 2 кг", 
    description: "Шлифованный длиннозерный рис высшего качества", 
    price: 1850, rating: 4, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 150
  },
  {
    id: 27, cId: 4, 
    name: "Молоко Петропавловское 2.5% 0.9 л", 
    description: "Ультрапастеризованное коровье молоко местного производства", 
    price: 490, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 560
  },
  {
    id: 28, cId: 4, 
    name: "Напиток Coca-Cola Classic 2 л", 
    description: "Сильногазированный безалкогольный напиток", 
    price: 650, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 1300
  },
  {
    id: 29, cId: 4, 
    name: "Сахар-песок 1 кг", 
    description: "Белый кристаллический сахар из сахарной свеклы", 
    price: 450, rating: 4, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 95
  },
  {
    id: 30, cId: 4, 
    name: "Мука Цесна Высший сорт 2 кг", 
    description: "Пшеничная мука высшего качества для выпечки и теста", 
    price: 1100, rating: 5, 
    mainImage: "image", 
    images: ["images"], 
    kaspiLink: "https://kaspi.kz", 
    tgLink: "https://t.me", whLink: "https://wa.me", likes: 440
  },
  
  {
    id: 1, cId: 3,
    name: "Диван угловой",
    description: "Удобный угловой диван для гостиной",
    price: 350000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 27
  },
  {
    id: 2, cId: 3,
    name: "Кровать двуспальная",
    description: "Комфортная двуспальная кровать с прочным каркасом",
    price: 280000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 19
  },
  {
    id: 3, cId: 3,
    name: "Матрас ортопедический",
    description: "Ортопедический матрас средней жесткости",
    price: 190000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 23
  },
  {
    id: 4, cId: 3,
    name: "Шкаф-купе",
    description: "Вместительный шкаф-купе для спальни",
    price: 320000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 15
  },
  {
    id: 5, cId: 3,
    name: "Комод",
    description: "Практичный комод с выдвижными ящиками",
    price: 140000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 11
  },
  {
    id: 6, cId: 3,
    name: "Обеденный стол",
    description: "Обеденный стол для кухни или столовой",
    price: 160000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 18
  },
  {
    id: 7, cId: 3,
    name: "Стулья кухонные (4 шт)",
    description: "Набор удобных кухонных стульев",
    price: 120000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 10
  },
  {
    id: 8, cId: 3,
    name: "Тумба под ТВ",
    description: "Современная тумба под телевизор",
    price: 135000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 14
  },
  {
    id: 9, cId: 3,
    name: "Кресло",
    description: "Мягкое кресло для отдыха",
    price: 170000,
    rating: 5,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 16
  },
  {
    id: 10, cId: 3,
    name: "Рабочий стол",
    description: "Компактный рабочий стол для дома и офиса",
    price: 110000,
    rating: 4,
    mainImage: "https://picsum.photos",
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"],
    kaspiLink: "https://kaspi.kz",
    tgLink: "https://t.me",
    whLink: "https://wa.me",
    likes: 12
  }

]
    private cart:Product[]=[];

    // гетторы
    getAllProducts()
    {
      return this.products;
    }
    getCategories()//категория
    {
        return this.categories;
    }

    getProductsByCategory(cId:number)//продукты по категории
    {
        return this.products.filter(product => cId === product.cId)
    }

    getCart()//продукты в корзине
    {
        return this.cart;
    }

    //функции корзины
    addToCart(product:Product)
    {
      this.cart.push(product)
    }

    removeFromCart(pid:number)
    {
        this.cart = this.cart.filter(p=>pid!==p.id);
        
    }
    clearCart()
    {
      this.cart = [];
    }
    removeFromList(pid:number, cid:number)
    {
        console.log("hello from service");
        this.products = this.products.filter(p=> p.id !== pid);
        return this.getProductsByCategory(cid);
    } 
    
    likeProduct(pid:number)
    {
        const product = this.products.find(p=>pid === p.id);
        if(product)
        {
            product.likes++;
        }
    }

    searchProducts(searchTerm: string): Product[] {
    if (!searchTerm.trim()) {
      return this.products;
    }
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
    
}