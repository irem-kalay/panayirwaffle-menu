import { useEffect, useState } from 'react';
import { MenuItemCard } from './MenuItemCard';
import { AppTopNav } from './AppTopNav';
import { AppFooter } from './AppFooter';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { menuCategories, type MenuCategoryId } from '../data/menu';

interface CategoryPageProps {
  categoryId: MenuCategoryId;
  onBack: () => void;
}

export function CategoryPage({ categoryId, onBack }: CategoryPageProps) {
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const category = menuCategories[categoryId];

  useEffect(() => {
    setActiveSubcategory(category?.subcategories[0] ?? '');
  }, [categoryId, category]);

  if (!category) {
    return <div className="p-6 text-sm text-muted-foreground">Kategori bulunamadı.</div>;
  }

  const currentSubcategory = activeSubcategory || category.subcategories[0];
  const filteredItems = category.items.filter((item) => item.subcategory === currentSubcategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="app-header-sticky sticky top-0 z-50 w-full pt-safe border-b border-border">
        <AppTopNav embedded title={category.title} onBack={onBack} />
        <div className="app-header-tabs border-t border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <Tabs value={currentSubcategory} onValueChange={setActiveSubcategory} className="w-full">
              <TabsList className="tabs-horizontal-scroll w-full justify-start h-auto p-0 bg-transparent rounded-none border-0 flex-nowrap">
                {category.subcategories.map((subcat) => (
                  <TabsTrigger
                    key={subcat}
                    value={subcat}
                    className="flex-shrink-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-4 sm:px-6 py-3 sm:py-4 touch-manipulation whitespace-nowrap"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 menu-item-grid">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={`${item.subcategory}-${item.name}`}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
