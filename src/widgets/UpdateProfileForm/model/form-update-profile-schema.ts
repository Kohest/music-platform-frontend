import { z } from "zod";
import { passwordSchema } from "../../LoginForm/model/form-login-schema";
import { formRegisterSchema } from "../../RegisterForm/model/form-register-schema";
export const formUpdateProfileSchema = z
  .object({
    name: z.string().optional(),
    email: z
      .string()
      .optional()
      .refine((value) => !value || /\S+@\S+\.\S+/.test(value), {
        message: "Неверный формат email",
      }),
    avatar: z.string().optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.password && !data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Подтверждение пароля обязательно, если пароль заполнен",
        path: ["confirmPassword"],
      });
    }

    if (
      data.password &&
      data.confirmPassword &&
      data.password !== data.confirmPassword
    ) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли должны совпадать",
        path: ["confirmPassword"],
      });
    }
  });
