import { z } from "zod";

export const detailsSchema = z.object({
  year: z
    .number()
    .min(1000, { message: "Год должен содержать 4 цифры" })
    .max(new Date().getFullYear(), {
      message: "Год не может быть больше текущего",
    }),
  genre: z
    .string()
    .min(3, { message: "Минимум 3 символа" })
    .max(12, { message: "Максимум 12 символов" }),
});
