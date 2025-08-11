'use server';

import { matchLawyer, MatchLawyerInput, MatchLawyerOutput } from "@/ai/flows/match-lawyer";
import { z } from 'zod';

const schema = z.object({
  legalNeedDescription: z.string().min(10, { message: "Please provide a more detailed description (at least 10 characters)."}),
});

export type FormState = {
  message: string;
  lawyers?: MatchLawyerOutput;
  error?: string;
}

export async function findLawyerAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    legalNeedDescription: formData.get('legalNeedDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      error: validatedFields.error.flatten().fieldErrors.legalNeedDescription?.[0],
    };
  }

  const input: MatchLawyerInput = {
    legalNeedDescription: validatedFields.data.legalNeedDescription,
  };

  try {
    const lawyers = await matchLawyer(input);
    if (!lawyers || lawyers.length === 0) {
      return { message: "We couldn't find a suitable match. Please try rephrasing your need." };
    }
    return { message: "We found potential matches for you!", lawyers };
  } catch (e) {
    console.error(e);
    return { message: "An unexpected error occurred. Please try again later.", error: "Server error" };
  }
}
