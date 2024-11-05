import React, { FC } from "react";
import Button from "../../shared/ui/button";
import Input from "../../shared/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema } from "./model/form-login-schema";
import { useAuth } from "../../entities/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { TLoginDataForm } from "./model/types";
import { toast } from "react-toastify";

interface Props {
  changeForm: () => void;
}

const LoginForm: FC<Props> = ({ changeForm }) => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const form = useForm({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TLoginDataForm) => {
    try {
      await loginUser(data.email, data.password);
      form.reset();
      navigate("/home");
    } catch (error) {
      toast.error("Не удалось войти в аккаунт", {
        position: "bottom-right",
      });
      console.log(error);
    }
  };

  return (
    <div className="flex relative animate-rollFromRight">
      <FormProvider {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-6 w-full">
            <h1 className="text-center text-[rgba(247,247,255,.9)] font-[500] text-[20px]">
              Остался один шаг до музыки
            </h1>
          </div>
          <div className="pt-4">
            <div className="w-full relative mb-6">
              <Input
                registerAsValue={"email"}
                type="text"
                placeholder="Email"
                className="mb-6"
              />
              <Input
                registerAsValue={"password"}
                type="password"
                placeholder="Пароль"
              />
            </div>
            <div>
              <Button text="Войти" className="mb-6" />
              <Button
                text="Создать ID"
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

export default LoginForm;
