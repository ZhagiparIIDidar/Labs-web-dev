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
    name: "Смартфон Galaxy S23", 
    description: "Флагманский смартфон с отличной камерой", 
    price: 450000, rating: 5, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos", "https://picsum.photos", "https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 12
  },
  {
    id: 2, cId: 1, 
    name: "Ноутбук MateBook", 
    description: "Легкий и мощный для работы в дороге", 
    price: 380000, rating: 4, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos", "https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 8
  },
  {
    id: 3, cId: 2, 
    name: "Наушники Air Buds", 
    description: "Чистый звук и глубокие басы", 
    price: 85000, rating: 5, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 25
  },
  {
    id: 4, cId: 2, 
    name: "Умные часы FitBand", 
    description: "Следите за здоровьем 24/7", 
    price: 45000, rating: 3, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos", "https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 15
  },
  {
    id: 5, cId: 3, 
    name: "Игровая мышь ProGamer", 
    description: "Максимальная точность в каждом клике", 
    price: 25000, rating: 5, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos", "https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 40
  },
  {
    id: 6, cId: 3, 
    name: "Механическая клавиатура", 
    description: "RGB подсветка и приятный отклик", 
    price: 55000, rating: 4, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 21
  },
  {
    id: 7, cId: 1, 
    name: "Планшет Tab Ultra", 
    description: "Огромный экран для творчества", 
    price: 290000, rating: 5, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos", "https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 19
  },
  {
    id: 8, cId: 4, 
    name: "Монитор 4K Gaming", 
    description: "144Гц для плавной картинки", 
    price: 180000, rating: 4, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 33
  },
  {
    id: 9, cId: 4, 
    name: "Внешний HDD 2TB", 
    description: "Храните все важные файлы под рукой", 
    price: 35000, rating: 3, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos", "https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz", tgLink: "https://t.me", whLink: "https://wa.me", likes: 5
  },
  {
    id: 10, cId: 2, 
    name: "Колонки 2.1 Hi-Fi", 
    description: "Мощная акустика для дома", 
    price: 65000, rating: 5, 
    mainImage: "https://picsum.photos", 
    images: ["https://picsum.photos", "https://picsum.photos"], 
    kaspiLink: "https://kaspi.kz0", tgLink: "https://t.me0", whLink: "https://wa.me0", likes: 50
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