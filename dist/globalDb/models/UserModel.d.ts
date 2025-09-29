import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    login: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type UserInput = z.infer<typeof UserSchema>;
//# sourceMappingURL=UserModel.d.ts.map