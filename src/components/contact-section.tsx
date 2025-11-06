"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // In a real app, you would handle form submission to a backend/Firestore.
        // For this demo, we'll just show a success toast.
        toast({
            title: "Message Sent!",
            description: "Thank you for your message. We will get back to you soon.",
        });

        e.currentTarget.reset();
    };

    return (
        <section id="contact" className="w-full py-20 sm:py-32 bg-secondary/50">
            <div className="container mx-auto px-4">
                <Card className="max-w-2xl mx-auto shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl md:text-4xl">Get In Touch</CardTitle>
                        <CardDescription>Have a project in mind? Let's create something amazing together.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="your@email.com" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" rows={5} placeholder="Tell me about your project..." required />
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit">Send Message</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
