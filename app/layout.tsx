import './globals.css'
import { Toaster } from "sonner";
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import {Providers} from '@/components/providers/convex-provider'
import { ModalProvider } from '@/components/providers/modal-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI PDF',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
          
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
         <Providers>
          <Toaster />
          <ModalProvider />
         {children}

         </Providers>
          
      </body>
    </html>

  )
}