'use server';

/**
 * @fileOverview This file contains the Genkit flow for AI-powered caption generation for portfolio images.
 *
 * It defines:
 * - `generateCaption`: A function to generate captions for images.
 * - `AICaptionInput`: The input type for the `generateCaption` function (image data URI).
 * - `AICaptionOutput`: The output type for the `generateCaption` function (generated caption string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICaptionInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      'The image data URI for which to generate a caption, must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
    ),
});

export type AICaptionInput = z.infer<typeof AICaptionInputSchema>;

const AICaptionOutputSchema = z.object({
  caption: z.string().describe('The generated caption for the image.'),
});

export type AICaptionOutput = z.infer<typeof AICaptionOutputSchema>;

export async function generateCaption(input: AICaptionInput): Promise<AICaptionOutput> {
  return aiCaptionGenerationFlow(input);
}

const aiCaptionPrompt = ai.definePrompt({
  name: 'aiCaptionPrompt',
  input: {schema: AICaptionInputSchema},
  output: {schema: AICaptionOutputSchema},
  prompt: `You are an expert graphic designer and photographer specializing in creating visually appealing and engaging content for online portfolios.

  Based on the image provided, generate a concise and captivating caption that highlights the key aspects, artistic intent, and target audience.
  Consider the design style: Minimal, cinematic, and professional.
  Use neutral colors (black, white, grey, with gold accent).

  Image: {{media url=imageDataUri}}
  Caption:`, 
});

const aiCaptionGenerationFlow = ai.defineFlow(
  {
    name: 'aiCaptionGenerationFlow',
    inputSchema: AICaptionInputSchema,
    outputSchema: AICaptionOutputSchema,
  },
  async input => {
    const {output} = await aiCaptionPrompt(input);
    return output!;
  }
);
