import { z } from "zod";

export const UserSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(6)
});

export type UserInput = z.infer<typeof UserSchema>;
