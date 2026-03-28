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
    <article className="menu-item-card-root">
      <div className="menu-item-layout">
        <div className="menu-item-image-shell">
          {imageUrl ? (
            <ImageWithFallback
              src={imageUrl}
              alt={name}
              className="menu-item-image"
            />
          ) : (
            <div className="menu-item-image menu-item-placeholder">
              {initials}
            </div>
          )}
        </div>

        <div className="menu-item-content">
          <div className="menu-item-heading">
            <div className="menu-item-copy">
              <h4 className="text-foreground font-medium">{name}</h4>
              {description && description.trim() ? (
                <p className="menu-item-description">{description}</p>
              ) : (
                <p className="menu-item-description menu-item-description-muted">
                  Uyumlu eşlikçilerle hazırlanan özel sunum.
                </p>
              )}
            </div>
            <span className="menu-item-price">{price}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
