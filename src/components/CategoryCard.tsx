import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export function CategoryCard({ index, title, description, imageUrl, onClick }: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="category-card-root group text-left w-full"
      data-layout={index % 2 === 0 ? 'default' : 'reverse'}
    >
      <div className="category-card-layout">
        <div className="category-card-image-wrap">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="category-card-image"
          />
        </div>

        <div className="category-card-body">
          <div className="category-card-text">
            <p className="category-card-kicker">Lezzet seçkisi</p>
            <h3 className="text-primary">{title}</h3>
            <p className="category-card-desc">{description}</p>
          </div>

          <span className="category-card-link">
            Menüyü Göster
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </button>
  );
}
