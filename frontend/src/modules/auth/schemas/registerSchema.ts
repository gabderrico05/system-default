import { z } from "zod"

export const registerSchema = z.object({
  fullName: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  passwordConfirmation: z.string()
}).refine(
  data => data.password === data.passwordConfirmation,
  {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  }
)

export type RegisterForm = z.infer<typeof registerSchema>