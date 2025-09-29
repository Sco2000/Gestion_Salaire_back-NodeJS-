import { z } from "zod";
export declare const PayRunSchema: z.ZodObject<{
    periodeDebut: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDate>;
    periodeFin: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDate>;
    typePayRun: z.ZodString;
}, z.core.$strip>;
export type PayRunInput = z.infer<typeof PayRunSchema>;
//# sourceMappingURL=payRunModel.d.ts.map