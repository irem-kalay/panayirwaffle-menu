import { Clock, MapPin, Phone } from 'lucide-react';

export function AppFooter() {
  return (
    <footer className="app-footer mt-auto border-t border-border bg-card">
      <div className="app-footer-grid max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-10 pb-safe">
        <div className="app-footer-brand">
          <p className="text-primary font-medium mb-2">Panayır Waffle</p>
          <p className="text-muted-foreground text-sm">
            El yapımı waffle ve içeceklerle lezzetli anlar için.
          </p>
        </div>

        <div>
          <p className="text-foreground font-medium text-sm mb-3">Çalışma saatleri</p>
          <div className="flex gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4 shrink-0 opacity-80" aria-hidden />
            <div>
              <p>Her gün</p>
              <p className="text-foreground font-medium">12:00 – 01:00</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-foreground font-medium text-sm mb-3">İletişim</p>
          <ul className="app-footer-list">
            <li className="flex gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 shrink-0 opacity-80" aria-hidden />
              <span>Atatürk, Atapark Cd No:2-4, 34758 Ataşehir/İstanbul</span>
            </li>
            <li className="flex gap-2 items-center text-sm text-muted-foreground">
              <Phone className="w-4 h-4 shrink-0 opacity-80" aria-hidden />
              <a
                href="tel:+90"
                className="text-primary hover:underline underline-offset-4 touch-manipulation"
              >
                0533 493 54 13
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="app-footer-bar border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 app-footer-bar-inner">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Panayır Waffle. Tüm hakları saklıdır.
          </p>
          <p className="text-muted-foreground text-xs">Dijital menü</p>
        </div>
      </div>
    </footer>
  );
}
