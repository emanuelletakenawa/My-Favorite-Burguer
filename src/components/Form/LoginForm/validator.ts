import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "O e-mail é obrigatório" })
    .email({ message: "O e-mail é obrigatório" }),
  password: z.string().min(1, { message: "A senha é obrigatória" }),
});

export type TLoginFormValues = z.infer<typeof schema>;
