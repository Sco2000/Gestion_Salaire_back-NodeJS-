import { z } from "zod";

export const PayRunSchema = z.object({
    periodeDebut: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date()
  ),
    periodeFin: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date()
  ),
    typePayRun: z.string()
});

export type PayRunInput = z.infer<typeof PayRunSchema>;
