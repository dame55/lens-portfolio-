"use client";
import { placeholderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function PortfolioGallery() {
  const portfolioItems = placeholderImages.filter(p => p.id.startsWith('portfolio-'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-4xl font-headline font-bold">Portfolio</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A selection of my favorite projects, showcasing my passion for design and photography.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioItems.map((item: ImagePlaceholder) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col group shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0 relative aspect-[4/3]">
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={item.imageHint}
                  />
                </CardContent>
                <CardFooter className="p-4 flex-col items-start bg-card flex-grow">
                    <p className="font-headline text-lg font-semibold">{item.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
