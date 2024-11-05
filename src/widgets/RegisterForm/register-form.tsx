import React, { FC } from "react";
import Button from "../../shared/ui/button";
import Input from "../../shared/ui/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../entities/auth/hooks/useAuth";
import { toast } from "react-toastify";
import { TRegisterDataForm } from "./model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formRegisterSchema } from "./model/form-register-schema";
interface Props {
  changeForm: () => void;
}
const RegisterForm: FC<Props> = ({ changeForm }) => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TRegisterDataForm) => {
    try {
      await registerUser(data.name, data.email, data.password);
      form.reset();
      navigate("/home");
    } catch (error) {
      toast.error("Не удалось зарегистрировать в аккаунт", {
        position: "bottom-right",
      });
      console.log(error);
    }
  };

  return (
    <div className="flex relative animate-rollFromLeft">
      <FormProvider {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-6 w-full">
            <h1 className="text-center text-[rgba(247,247,255,.9)] font-[500] text-[20px]">
              Зарегистрируйте ваш первый аккаунт
            </h1>
          </div>
          <div className="pt-4">
            <div className="w-full relative  mb-6">
              <Input
                type="text"
                placeholder="Имя"
                className="mb-6"
                registerAsValue="name"
              />
              <Input
                type="text"
                placeholder="Email"
                className="mb-6"
                registerAsValue="email"
              />
              <Input
                type="password"
                placeholder="Пароль"
                registerAsValue="password"
              />
            </div>
            <div>
              <Button text="Зарегистрироваться" className="mb-6" />
              <Button
                text="Уже есть аккаунт?"
                variant="outline"
                onClick={changeForm}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
