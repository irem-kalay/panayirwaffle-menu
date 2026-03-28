import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export function CategoryCard({ title, description, imageUrl, onClick }: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="category-card-root group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 text-left w-full h-full"
    >
      <div className="category-card-layout">
        <div className="relative category-card-image overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
        </div>

        <div className="category-card-body">
          <div className="category-card-text">
            <h3 className="text-primary">{title}</h3>
            <p className="category-card-desc">{description}</p>
          </div>

          <div className="flex items-center gap-2 text-primary text-sm mt-2">
            <span className="group-hover:underline">Menüyü Göster</span>
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </button>
  );
}
