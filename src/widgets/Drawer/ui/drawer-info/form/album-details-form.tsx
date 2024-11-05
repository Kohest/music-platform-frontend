import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { detailsSchema } from "./details-schema";
import { IDetailsForm } from "./types";
import { useUpdateAlbumMutation } from "../../../../../entities/albums/albumApi";
import { toast } from "react-toastify";
import { ErrorText } from "../../../../../shared/ui/error-text";
interface Props {
  year?: number;
  genre?: string;
  itemId: string;
  setActiveForm: (isActive: boolean) => void;
}
const AlbumDetailsForm: FC<Props> = ({
  year,
  genre,
  itemId,
  setActiveForm,
}) => {
  const [updateAlbum, { isLoading, error, isSuccess }] =
    useUpdateAlbumMutation();
  const {
    handleSubmit,
    register,
    formState: { dirtyFields, errors },
  } = useForm<IDetailsForm>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      year: year || new Date().getFullYear(),
      genre: genre || "",
    },
  });
  error && toast.error("Произошла ошибка", { position: "bottom-right" });
  isSuccess &&
    toast.success("Информация обновлена", { position: "bottom-right" });
  const onSubmit = async (data: IDetailsForm) => {
    if (!dirtyFields.year && !dirtyFields.genre) {
      toast.info("Нет изменений для отправки", { position: "bottom-right" });
      return;
    }
    try {
      await updateAlbum({ id: itemId, body: data });
      setActiveForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-[#777] my-[5px] text-[15px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("year", { valueAsNumber: true })}
          type="text"
          className="inline-block border border-[#ffdb4d] p-1"
        />
        {errors.year?.message && (
          <ErrorText text={errors.year?.message} className="mt-2" />
        )}
        <span className="inline-block w-[2px] h-[2px] -mt-[2px] mx-[6px] bg-[#d8d8d8] rounded-[50%] align-middle">
          &nbsp;
        </span>
        <input
          {...register("genre")}
          type="text"
          className="inline-block border border-[#ffdb4d] p-1"
        />
        {errors.genre?.message && (
          <ErrorText text={errors.genre?.message} className="mt-2" />
        )}
        <button type="submit" className="ml-2">
          Сохранить
        </button>
      </form>
    </div>
  );
};
export default AlbumDetailsForm;
