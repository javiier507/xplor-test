import type { Metadata } from 'next';

import { NextCacheProvider } from '../src/providers/chakra';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>
                <NextCacheProvider>{children}</NextCacheProvider>
            </body>
        </html>
    );
}
