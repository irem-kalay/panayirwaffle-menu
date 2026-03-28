import { ArrowLeft, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface AppTopNavProps {
  /** Alt sayfada başlık; ana sayfada kullanılmaz */
  title?: string;
  onBack?: () => void;
  /** Kategori sayfasında üst blok (sekme çubuğu ile birleşik) için: sadece iç satır */
  embedded?: boolean;
}

export function AppTopNav({ title, onBack, embedded }: AppTopNavProps) {
  const isNested = Boolean(onBack);

  const inner = (
    <div className="app-top-nav-inner max-w-7xl mx-auto px-3 sm:px-6">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {onBack ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="shrink-0 touch-manipulation -ml-1"
            aria-label="Menüye dön"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        ) : null}
        <span className="text-primary font-medium truncate text-base sm:text-lg">
          {isNested && title ? title : 'Panayır Waffle'}
        </span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm shrink-0">
        <Clock className="w-4 h-4 opacity-80" aria-hidden />
        <span>12:00 – 01:00</span>
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
