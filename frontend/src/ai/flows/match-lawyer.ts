// MatchLawyer
'use server';
/**
 * @fileOverview This file defines a Genkit flow for matching users with lawyers based on their legal needs.
 *
 * - matchLawyer - A function that takes a description of a legal need and returns a list of suitable lawyers.
 * - MatchLawyerInput - The input type for the matchLawyer function, representing the user's legal need.
 * - MatchLawyerOutput - The output type for the matchLawyer function, representing a list of matched lawyers.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchLawyerInputSchema = z.object({
  legalNeedDescription: z
    .string()
    .describe('A detailed description of the user\u2019s legal need.'),
});

export type MatchLawyerInput = z.infer<typeof MatchLawyerInputSchema>;

const LawyerSchema = z.object({
  name: z.string().describe('The name of the lawyer.'),
  specialty: z.string().describe('The lawyer\u2019s area of legal specialty.'),
  experienceYears: z
    .number()
    .describe('The number of years of experience the lawyer has.'),
  profileUrl: z.string().url().describe('URL of the lawyer profile.'),
});

const MatchLawyerOutputSchema = z.array(LawyerSchema).describe('An array of matched lawyers.');

export type MatchLawyerOutput = z.infer<typeof MatchLawyerOutputSchema>;

export async function matchLawyer(input: MatchLawyerInput): Promise<MatchLawyerOutput> {
  return matchLawyerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchLawyerPrompt',
  input: {schema: MatchLawyerInputSchema},
  output: {schema: MatchLawyerOutputSchema},
  prompt: `You are an AI assistant designed to match users with lawyers based on their legal needs.

  Given the following description of a user's legal need, please provide a list of lawyers who would be a good fit.

  Legal Need Description: {{{legalNeedDescription}}}

  Please return a JSON array of lawyers, with each lawyer object containing the following fields:
  - name: The name of the lawyer.
  - specialty: The lawyer's area of legal specialty.
  - experienceYears: The number of years of experience the lawyer has.
  - profileUrl: URL of the lawyer profile.

  Example:
  [
    {
      "name": "Jane Doe",
      "specialty": "Criminal Defense",
      "experienceYears": 10,
      "profileUrl": "https://example.com/jane-doe"
    },
    {
      "name": "John Smith",
      "specialty": "Family Law",
      "experienceYears": 5,
      "profileUrl": "https://example.com/john-smith"
    }
  ]
  `,
});

const matchLawyerFlow = ai.defineFlow(
  {
    name: 'matchLawyerFlow',
    inputSchema: MatchLawyerInputSchema,
    outputSchema: MatchLawyerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
