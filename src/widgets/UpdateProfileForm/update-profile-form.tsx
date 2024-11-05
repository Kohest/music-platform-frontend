import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IProfileResponse } from "../../entities/profile/types";
import { formUpdateProfileSchema } from "./model/form-update-profile-schema";
import ProfileFormOption from "./ui/profile-form-option";
import Button from "../../shared/ui/button";
import { useUpdateProfileMutation } from "../../entities/profile/profileApi";
import { toast } from "react-toastify";
import { IUpdateProfileRequest } from "../../entities/auth/types";
import Loader from "../../shared/ui/loader";
import { filterFormData } from "../../shared/utils/form-filtered-data";
interface Props {
  data: IProfileResponse;
}
const UpdateProfileForm: FC<Props> = ({ data }) => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const form = useForm({
    resolver: zodResolver(formUpdateProfileSchema),
    defaultValues: {
      name: data?.name || "",
      email: data?.email || "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: IUpdateProfileRequest) => {
    const filteredFormData = filterFormData(data);
    try {
      await updateProfile(filteredFormData);
      toast.success("Пользователь обновлен", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("Не удалось обновить пользователя", {
        position: "bottom-right",
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className="mt-[30px] mb-[10px] font-bold text-[20px] leading-[25px] text-[#222]">
          Мой профиль
        </h2>
        <ProfileFormOption
          optionText="Имя"
          registerAsValue="name"
          placeholder="Имя"
          inputType="text"
        />
        <ProfileFormOption
          optionText="Email"
          registerAsValue="email"
          placeholder="Email"
          inputType="text"
        />
        <ProfileFormOption
          optionText="Новый пароль"
          registerAsValue="password"
          placeholder="Новый пароль"
          inputType="password"
        />
        <ProfileFormOption
          optionText="Подтвердите пароль"
          registerAsValue="confirmPassword"
          placeholder="Подтвердите пароль"
          inputType="password"
        />
        <Button text="Сохранить" className="mt-6" disabled={isLoading} />
      </form>
    </FormProvider>
  );
};

export default UpdateProfileForm;
