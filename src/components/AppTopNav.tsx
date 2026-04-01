import { ArrowLeft, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { useLanguage } from '../context/LanguageContext';

interface AppTopNavProps {
  /** Alt sayfada başlık; ana sayfada kullanılmaz */
  title?: string;
  onBack?: () => void;
  /** Kategori sayfasında üst blok (sekme çubuğu ile birleşik) için: sadece iç satır */
  embedded?: boolean;
}

export function AppTopNav({ title, onBack, embedded }: AppTopNavProps) {
  const isNested = Boolean(onBack);
  const { language, setLanguage } = useLanguage();

  const inner = (
    <div className="app-top-nav-inner max-w-7xl mx-auto px-3 sm:px-6">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {onBack ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="shrink-0 touch-manipulation -ml-1"
            aria-label={language === 'tr' ? 'Menüye dön' : 'Back to menu'}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        ) : null}
        <span className="text-primary font-medium truncate text-base sm:text-lg">
          {isNested && title ? title : 'Panayır Waffle'}
        </span>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <div className="flex items-center gap-3 px-2 py-1 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer"
             onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
             role="button"
             tabIndex={0}
             onKeyDown={(e) => {
               if (e.key === 'Enter' || e.key === ' ') {
                 e.preventDefault();
                 setLanguage(language === 'tr' ? 'en' : 'tr');
               }
             }}
             aria-label={language === 'tr' ? 'Dile geç: İngilizce' : 'Change language: Turkish'}>
          <span className="text-xs sm:text-sm font-bold text-foreground select-none">{language === 'tr' ? 'TR' : 'EN'}</span>
          <Switch
            checked={language === 'en'}
            onCheckedChange={(checked) => setLanguage(checked ? 'en' : 'tr')}
            className="touch-manipulation"
            disabled={false}
          />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
          <Clock className="w-4 h-4 opacity-80" aria-hidden />
          <span>12:00 – 01:00</span>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return inner;
  }

  return (
    <header className="app-top-nav sticky top-0 z-50 w-full pt-safe">
      {inner}
    </header>
  );
}
