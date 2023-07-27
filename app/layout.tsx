import type { Metadata } from 'next';

import { NextCacheProvider } from '@/app/providers/chakra';
import { NextAuthProvider } from '@/app/providers/auth';

export const metadata: Metadata = {
    title: 'Xplor Demo',
    description: 'Made by Penalba',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>
                <NextCacheProvider>
                    <NextAuthProvider>{children}</NextAuthProvider>
                </NextCacheProvider>
            </body>
        </html>
    );
}
