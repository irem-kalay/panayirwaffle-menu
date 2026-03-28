import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItemCardProps {
  name: string;
  description?: string;
  price: string;
  imageUrl?: string;
}

export function MenuItemCard({ name, description, price, imageUrl }: MenuItemCardProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="menu-item-card-root bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="menu-item-layout">
        <div className="relative menu-item-image overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback
              src={imageUrl}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(145deg,#f1dfca,#edc97d)] text-lg font-semibold text-primary">
              {initials}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
        </div>

        <div className="menu-item-content">
          <div className="menu-item-heading">
            <h4 className="text-foreground font-medium">{name}</h4>
            <span className="text-primary shrink-0 text-sm sm:text-base">{price}</span>
          </div>
          {description && description.trim() ? (
            <p className="menu-item-description">{description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
