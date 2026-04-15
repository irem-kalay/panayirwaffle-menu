import { useState } from 'react'; // useState hook'unu ekledik
import { X } from 'lucide-react'; // Kapatma butonu ikonu için eklendi
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
  
  // Popup'ın açık olup olmadığını kontrol eden state (varsayılan olarak açık)
  const [showBirthdayPopup, setShowBirthdayPopup] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      
      {/* --- SÜRPRİZ POPUP BAŞLANGICI --- */}
      {showBirthdayPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-card text-card-foreground p-6 sm:p-8 rounded-2xl shadow-xl max-w-md w-full relative text-center">
            {/* Çarpı İkonu */}
            <button
              onClick={() => setShowBirthdayPopup(false)}
              className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-primary mb-3">SÜPRİZ YAPIYORUZ!</h2>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Bugün Şevval Ada Şit Hanım'ın doğum günü, siz de bize katılın ve kutlayın! 🎂
            </p>
            
            {/* Menüye Dön Butonu */}
            <button
              onClick={() => setShowBirthdayPopup(false)}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Menüye Dön
            </button>
          </div>
        </div>
      )}
      {/* --- SÜRPRİZ POPUP BİTİŞİ --- */}

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