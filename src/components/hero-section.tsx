"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { placeholderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const heroImage = placeholderImages.find(p => p.id === 'hero');

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          quality={100}
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg"
        >
          Design that Speaks.
          <br />
          Photography that Feels.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 font-body text-lg md:text-xl max-w-2xl text-shadow"
        >
          A passionate graphic designer and photographer creating visually stunning and emotionally resonant work.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="#portfolio">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
       <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <ArrowDown className="h-8 w-8 text-white/70" />
      </motion.div>
    </section>
  );
}
