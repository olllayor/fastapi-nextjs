import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { Film } from 'lucide-react';
import { UserButton } from "@clerk/nextjs";
import type { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import './globals.css'
export const metadata = {
  title: 'SubtitleAI',
  description: 'AI-powered subtitle generation',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <div className="flex max-w-6xl mx-auto flex-col min-h-screen">
            <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <Film className="h-8 w-8 text-primary" />
                  <span className="ml-2 text-2xl font-bold text-primary">SubtitleAI</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                  <Link href="/pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                    Pricing
                  </Link>
                  <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                  <SignedOut>
                    <Link href="/sign-in">
                      <Button variant="outline">Sign In</Button>
                    </Link>
                  </SignedOut>
                </div>
              </nav>
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <footer className="w-full border-t border-gray-200 py-4 text-center mt-10">
              <p className="text-sm text-gray-500">© 2024 SubtitleAI. All rights reserved.</p>
            </footer>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
