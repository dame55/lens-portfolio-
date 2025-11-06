// src/ai/flows/ask-the-artist-chatbot.ts
'use server';
/**
 * @fileOverview Implements the "Ask the Artist" chatbot flow, allowing visitors to ask questions about the artist's work and techniques.
 *
 * - askTheArtist - The main function to handle user queries.
 * - AskTheArtistInput - The input type for the askTheArtist function.
 * - AskTheArtistOutput - The return type for the askTheArtist function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskTheArtistInputSchema = z.object({
  question: z.string().describe('The question the user wants to ask the artist.'),
});
export type AskTheArtistInput = z.infer<typeof AskTheArtistInputSchema>;

const AskTheArtistOutputSchema = z.object({
  answer: z.string().describe('The artist AI chatbot answer to the question.'),
});
export type AskTheArtistOutput = z.infer<typeof AskTheArtistOutputSchema>;


export async function askTheArtist(input: AskTheArtistInput): Promise<AskTheArtistOutput> {
  return askTheArtistFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askTheArtistPrompt',
  input: {schema: AskTheArtistInputSchema},
  output: {schema: AskTheArtistOutputSchema},
  prompt: `You are a helpful chatbot representing a graphic designer and photographer. A visitor to the artist's portfolio website has asked the following question:

{{question}}

Answer the question in a way that is informative and engaging, reflecting the artist's expertise and passion for their work.  Focus your answer on graphic design, photography, and the artist's techniques.`,
});

const askTheArtistFlow = ai.defineFlow(
  {
    name: 'askTheArtistFlow',
    inputSchema: AskTheArtistInputSchema,
    outputSchema: AskTheArtistOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
