'use client';

import React, { ReactNode } from 'react';
import { MonkeyMaskProvider } from './MonkeyMaskProvider';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Combined providers wrapper for the MonkeyMask dApp template.
 * This wraps all necessary providers for wallet functionality.
 * 
 * Usage:
 * ```tsx
 * import { Providers } from '@/providers';
 * 
 * export default function RootLayout({ children }: { children: ReactNode }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <Providers>
 *           {children}
 *         </Providers>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <MonkeyMaskProvider
      config={{
        autoConnect: true,
        // Keep callbacks silent to reduce console noise on reload
        onConnect: () => {},
        onDisconnect: () => {},
        onError: () => {},
      }}
    >
      {children}
    </MonkeyMaskProvider>
  );
}

// Re-export everything developers need
export { useMonkeyMask } from './MonkeyMaskProvider';
export type { MonkeyMaskContextType } from './MonkeyMaskProvider';
