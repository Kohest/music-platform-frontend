import { z } from "zod";
export const passwordSchema = z
  .string()
  .min(6, { message: "Пароль должен быть не менее 6 символов" });
export const formLoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Проверьте, правильно ли указан ваш адрес" }),
  password: passwordSchema,
});
