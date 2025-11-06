"use client";

import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

export function AboutSection() {
    const aboutImage = placeholderImages.find(p => p.id === 'hero');

    return (
        <section id="about" className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                        {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={aboutImage.imageHint}
                            />
                        )}
                    </div>
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">About The Artist</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Hi, I'm Alex Doe, a passionate and detail-oriented graphic designer and photographer with over a decade of experience in turning ideas into impactful visual stories. My work is driven by a love for clean aesthetics, compelling narratives, and the power of an image to evoke emotion.
                            </p>
                            <p>
                                From crafting unique brand identities for startups to capturing fleeting moments in the urban jungle, I approach every project with curiosity and a commitment to excellence. I believe great design is not just about looking good—it's about clear communication and creating a lasting connection with the audience.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
