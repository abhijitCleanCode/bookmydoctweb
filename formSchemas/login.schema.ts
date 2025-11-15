import * as z from "zod";

export const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string(),
})

export type LoginSchema = z.infer<typeof loginSchema>
