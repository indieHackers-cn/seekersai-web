import { PropsWithChildren } from 'react';

export default function WorkplaceLayout({
    children
}: PropsWithChildren) {
  return (
    <section>
      {children}
    </section>
    );
}