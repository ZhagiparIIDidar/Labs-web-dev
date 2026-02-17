import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  currentImageIndex = 0;
  showGallery = false;

  // Создает массив для отображения звезд рейтинга
  getStarsArray(): number[] {
    const fullStars = Math.floor(this.product.rating);
    const hasHalfStar = this.product.rating % 1 >= 0.5;
    return Array(5).fill(0).map((_, index) => {
      if (index < fullStars) return 1;
      if (index === fullStars && hasHalfStar) return 0.5;
      return 0;
    });
  }

  // Поделиться в Telegram
  shareOnTelegram(): void {
    const text = encodeURIComponent(this.product.name);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
  shareOnKaspi(): void {
    const text = encodeURIComponent(this.product.name);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  // Следующее изображение
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  // Предыдущее изображение
  prevImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.product.images.length - 1 
      : this.currentImageIndex - 1;
  }

  // Выбрать конкретное изображение
  setImage(index: number): void {
    this.currentImageIndex = index;
  }

  // Показать/скрыть галерею
  toggleGallery(): void {
    this.showGallery = !this.showGallery;
  }

  // Форматирование цены (добавляет пробелы и символ тенге)
  formatPrice(price: number): string {
    return new Intl.NumberFormat('kk-KZ', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }
}