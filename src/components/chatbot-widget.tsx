"use client";

import { askTheArtist, type AskTheArtistOutput } from "@/ai/flows/ask-the-artist-chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Message = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
};

export function ChatbotWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      text: "Hello! I'm an AI assistant. Feel free to ask me anything about the artist's work or techniques."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response: AskTheArtistOutput = await askTheArtist({ question: input });
      const assistantMessage: Message = { id: Date.now() + 1, role: 'assistant', text: response.answer };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error asking the artist:", error);
      const errorMessage: Message = { id: Date.now() + 1, role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          aria-label="Open Chatbot"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="end" className="w-[90vw] max-w-md p-0 border-0 rounded-xl" sideOffset={16}>
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="text-primary h-5 w-5" />
              Ask the Artist
            </CardTitle>
            <CardDescription>I'm an AI assistant trained on the artist's style and work.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-6">
              <div className="flex flex-col gap-4">
                {messages.map(message => (
                  <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="max-w-[80%] rounded-lg px-4 py-2 bg-secondary flex items-center gap-2">
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0s'}} />
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                disabled={isLoading}
                autoComplete="off"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
