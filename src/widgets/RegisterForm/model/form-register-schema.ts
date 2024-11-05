import { z } from "zod";
import { formLoginSchema } from "../../LoginForm/model/form-login-schema";

export const formRegisterSchema = formLoginSchema.merge(
  z.object({
    name: z.string().min(4, { message: "Имя должно быть длиннее 4 символов" }),
  })
);
