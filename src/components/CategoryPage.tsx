import { useEffect, useMemo, useState } from 'react';
import { MenuItemCard } from './MenuItemCard';
import { AppTopNav } from './AppTopNav';
import { AppFooter } from './AppFooter';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { menuCategories, menuCategoryList, type MenuCategoryId } from '../data/menu';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface CategoryPageProps {
  categoryId: MenuCategoryId;
  onBack: () => void;
  onSelectCategory: (categoryId: MenuCategoryId) => void;
}

export function CategoryPage({ categoryId, onBack, onSelectCategory }: CategoryPageProps) {
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const { language } = useLanguage();
  const t = translations[language];
  const category = menuCategories[categoryId];
  const displaySubcategories = language === 'en' && category?.subcategoriesEn ? category.subcategoriesEn : category?.subcategories ?? [];
  const subcategorySections = useMemo(() => {
    if (!category) {
      return [];
    }

    return category.subcategories.map((subcategory, idx) => ({
      id: `${category.id}-section-${idx}`,
      key: subcategory,
      label: displaySubcategories[idx] ?? subcategory,
      items: category.items.filter((item) => item.subcategory === subcategory),
    }));
  }, [category, displaySubcategories]);

  useEffect(() => {
    setActiveSubcategory(category?.subcategories[0] ?? '');
  }, [categoryId, category]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [categoryId]);

  useEffect(() => {
    if (subcategorySections.length <= 1) {
      return;
    }

    const sectionElements = subcategorySections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSubcategory(visibleSection.target.getAttribute('data-subcategory') ?? '');
        }
      },
      {
        rootMargin: '-22% 0px -58% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [subcategorySections]);

  if (!category) {
    return <div className="p-6 text-sm text-muted-foreground">{t.common.categoryNotFound}</div>;
  }

  const displayTitle = language === 'en' && category.titleEn ? category.titleEn : category.title;
  const displayPageDesc = language === 'en' && category.pageDescriptionEn ? category.pageDescriptionEn : category.pageDescription;
  const displayNavLabel = language === 'en' && category.navLabelEn ? category.navLabelEn : category.navLabel;

  const handleJumpToSection = (sectionId: string, subcategory: string) => {
    setActiveSubcategory(subcategory);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="app-header-sticky sticky top-0 z-50 w-full pt-safe border-b border-border">
        <AppTopNav embedded title={displayTitle} onBack={onBack} />
        <div className="app-header-tabs border-t border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3">
            <nav className="tabs-horizontal-scroll menu-section-switcher" aria-label={language === 'tr' ? 'Menü kategorileri' : 'Menu categories'}>
              {menuCategoryList.map((menuSection) => {
                const label = language === 'en' && menuSection.navLabelEn ? menuSection.navLabelEn : menuSection.navLabel;
                return (
                  <button
                    key={menuSection.id}
                    type="button"
                    onClick={() => onSelectCategory(menuSection.id)}
                    className={`menu-section-button ${menuSection.id === categoryId ? 'is-active' : ''}`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
        {subcategorySections.length > 1 ? (
          <div className="app-header-tabs border-t border-border">
            <div className="max-w-7xl mx-auto px-3 sm:px-6">
              <nav
                className="tabs-horizontal-scroll menu-subcategory-tabs"
                aria-label={language === 'tr' ? 'Alt bölüm bağlantıları' : 'Subsection links'}
              >
                {subcategorySections.map((section, index) => (
                  <div key={section.key} className="menu-subcategory-link-group">
                    <button
                      type="button"
                      onClick={() => handleJumpToSection(section.id, section.key)}
                      className={`menu-subcategory-button ${activeSubcategory === section.key ? 'is-active' : ''}`}
                      aria-current={activeSubcategory === section.key ? 'true' : undefined}
                    >
                      {section.label}
                    </button>
                    {index < subcategorySections.length - 1 ? (
                      <span className="menu-subcategory-separator" aria-hidden="true">
                        /
                      </span>
                    ) : null}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-12 w-full flex-1">
        <section className="menu-category-hero">
          <div className="menu-category-hero-copy">
            <p className="menu-category-kicker">{displayNavLabel} {language === 'tr' ? 'menüsü' : 'menu'}</p>
            <h2 className="text-primary">{displayTitle}</h2>
            <p className="text-muted-foreground">{displayPageDesc}</p>
          </div>
          <div className="menu-category-hero-media">
            <ImageWithFallback
              src={category.heroImage}
              alt={displayTitle}
              className="menu-category-hero-image"
            />
          </div>
        </section>

        <div className="menu-subcategory-sections">
          {subcategorySections.map((section) => (
            <section
              key={section.key}
              id={section.id}
              data-subcategory={section.key}
              className="menu-subcategory-section"
            >
              <div className="menu-subcategory-heading">
                <div>
                  <p className="menu-subcategory-kicker">
                    {displayNavLabel} {language === 'tr' ? 'bölümü' : 'section'}
                  </p>
                  <h3 className="menu-subcategory-title">{section.label}</h3>
                </div>
                <span className="menu-subcategory-count">
                  {section.items.length} {language === 'tr' ? 'ürün' : 'items'}
                </span>
              </div>

              <div className="menu-item-grid">
                {section.items.map((item) => {
                  const displayName = language === 'en' && item.nameEn ? item.nameEn : item.name;
                  const displayDesc = language === 'en' && item.descriptionEn ? item.descriptionEn : item.description;
                  return (
                    <MenuItemCard
                      key={`${item.subcategory}-${item.name}`}
                      name={displayName}
                      description={displayDesc}
                      price={item.price}
                      imageUrl={item.imageUrl ?? category.heroImage}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
