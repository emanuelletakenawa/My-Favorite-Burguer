import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("O e-mail deve estar no formato correto"),
    password: z
      .string()
      .min(7, {
        message: "A senha é obrigatória e precisa de, no mínimo, 8 caracteres",
      })
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.*?[!@#$%^&*()_+={}\[\]|\\;:'',<.>\/?])/,
        "É necessário pelo menos um caractere especial"
      ),
    confirm: z.string().min(1, "A confirmação da senha é obrigatória"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não se correspondem",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof schema>;
