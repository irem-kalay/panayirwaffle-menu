import { CategoryCard } from './CategoryCard';
import { AppTopNav } from './AppTopNav';
import { AppFooter } from './AppFooter';
import { menuCategoryList, type MenuCategoryId } from '../data/menu';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface HomePageProps {
  onSelectCategory: (category: MenuCategoryId) => void;
}

export function HomePage({ onSelectCategory }: HomePageProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppTopNav />

      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12 w-full flex-1">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-primary mb-2 sm:mb-3">{t.home.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2">
            {t.home.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto category-card-grid">
          {menuCategoryList.map((category, index) => {
            const catTitle = language === 'en' && category.titleEn ? category.titleEn : category.title;
            const catDesc = language === 'en' && category.homeDescriptionEn ? category.homeDescriptionEn : category.homeDescription;
            return (
              <CategoryCard
                key={category.id}
                index={index}
                title={catTitle}
                description={catDesc}
                imageUrl={category.heroImage}
                onClick={() => onSelectCategory(category.id)}
              />
            );
          })}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
