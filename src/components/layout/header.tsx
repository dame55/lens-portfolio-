import { Camera } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg sm:inline-block">
              LensAI Portfolio
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
            <Link href="#portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <ModeToggle />
          <Button asChild variant="outline">
            <Link href="/admin">Admin Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
