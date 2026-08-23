import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().min(1, "name cannot be empty"),
    email: z.email(),
    password: z
      .string()
      .min(6, "password must be atleast 2 characters long"),
  })
  .strict();

export type RegisterInput = z.infer<typeof registerUserSchema>;