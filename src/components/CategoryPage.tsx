import { useEffect, useState } from 'react';
import { MenuItemCard } from './MenuItemCard';
import { AppTopNav } from './AppTopNav';
import { AppFooter } from './AppFooter';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { menuCategories, menuCategoryList, type MenuCategoryId } from '../data/menu';

interface CategoryPageProps {
  categoryId: MenuCategoryId;
  onBack: () => void;
  onSelectCategory: (categoryId: MenuCategoryId) => void;
}

export function CategoryPage({ categoryId, onBack, onSelectCategory }: CategoryPageProps) {
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const category = menuCategories[categoryId];

  useEffect(() => {
    setActiveSubcategory(category?.subcategories[0] ?? '');
  }, [categoryId, category]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [categoryId]);

  if (!category) {
    return <div className="p-6 text-sm text-muted-foreground">Kategori bulunamadı.</div>;
  }

  const currentSubcategory = category.subcategories.includes(activeSubcategory)
    ? activeSubcategory
    : category.subcategories[0];
  const filteredItems = category.items.filter((item) => item.subcategory === currentSubcategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="app-header-sticky sticky top-0 z-50 w-full pt-safe border-b border-border">
        <AppTopNav embedded title={category.title} onBack={onBack} />
        <div className="app-header-tabs border-t border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3">
            <nav className="tabs-horizontal-scroll menu-section-switcher" aria-label="Menü kategorileri">
              {menuCategoryList.map((menuSection) => (
                <button
                  key={menuSection.id}
                  type="button"
                  onClick={() => onSelectCategory(menuSection.id)}
                  className={`menu-section-button ${menuSection.id === categoryId ? 'is-active' : ''}`}
                >
                  {menuSection.navLabel}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="app-header-tabs border-t border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <Tabs value={currentSubcategory} onValueChange={setActiveSubcategory} className="w-full">
              <TabsList className="tabs-horizontal-scroll menu-subcategory-tabs w-full justify-start h-auto p-0 bg-transparent rounded-none border-0 flex-nowrap">
                {category.subcategories.map((subcat) => (
                  <TabsTrigger
                    key={subcat}
                    value={subcat}
                    className="menu-subcategory-button flex-shrink-0 touch-manipulation whitespace-nowrap"
                  >
                    {subcat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-12 w-full flex-1">
        <section className="menu-category-hero">
          <div className="menu-category-hero-copy">
            <p className="menu-category-kicker">{category.navLabel} menüsü</p>
            <h2 className="text-primary">{category.title}</h2>
            <p className="text-muted-foreground">{category.pageDescription}</p>
          </div>
          <div className="menu-category-hero-media">
            <ImageWithFallback
              src={category.heroImage}
              alt={category.title}
              className="menu-category-hero-image"
            />
          </div>
        </section>

        <div className="menu-item-grid">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={`${item.subcategory}-${item.name}`}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl ?? category.heroImage}
            />
          ))}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
