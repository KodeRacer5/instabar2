import * as React from 'react';

import { cn } from '@/lib/utils';

function Section({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      data-slot="section"
      className={cn('px-4 py-12 md:py-16', className)}
      {...props}
    />
  );
}

export { Section };
