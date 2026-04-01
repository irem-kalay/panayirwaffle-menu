import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CategoryPage';
import { LanguageProvider } from './context/LanguageContext';
import type { MenuCategoryId } from './data/menu';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | MenuCategoryId>('home');

  const handleSelectCategory = (categoryId: MenuCategoryId) => {
    setCurrentPage(categoryId);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <LanguageProvider>
      {currentPage === 'home' ? (
        <HomePage onSelectCategory={handleSelectCategory} />
      ) : (
        <CategoryPage
          categoryId={currentPage}
          onBack={handleBackToHome}
          onSelectCategory={handleSelectCategory}
        />
      )}
    </LanguageProvider>
  );
}
