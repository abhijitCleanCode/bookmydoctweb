import * as z from "zod";

export const signupSchema = z.object({
    name: z.string().min(3, "Name is too short"),
    email: z.email("Invalid email"),
    password: z.string(),
})

export type SignupSchema = z.infer<typeof signupSchema>
