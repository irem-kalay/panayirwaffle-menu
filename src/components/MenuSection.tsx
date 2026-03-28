import { ReactNode } from 'react';

interface MenuSectionProps {
  title: string;
  children: ReactNode;
}

export function MenuSection({ title, children }: MenuSectionProps) {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-primary inline-block pb-3 border-b-2 border-accent">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
}
