import { toast } from "react-toastify";
import { useCallback } from "react";
import { createNoSubstitutionTemplateLiteral } from "typescript";

interface UseUpdateNameProps {
  mutationFunction: (data: any) => Promise<any>;
  formDataKey: string;
  toastSuccessMessage: string;
  toastErrorMessage: string;
}

export const useUpdateName = ({
  mutationFunction,
  formDataKey,
  toastSuccessMessage,
  toastErrorMessage,
}: UseUpdateNameProps) => {
  const handleKeyDown = useCallback(
    async (
      event: React.KeyboardEvent<HTMLInputElement>,
      newValue: string,
      id?: string
    ) => {
      if (event.key === "Enter" && newValue) {
        const formData = new FormData();
        formData.append(formDataKey, newValue);
        try {
          await mutationFunction(id ? { id, body: formData } : formData);
          toast.success(toastSuccessMessage, { position: "bottom-right" });
        } catch (error) {
          console.error(error);
          toast.error(toastErrorMessage, { position: "bottom-right" });
        }
      }
    },
    [mutationFunction, formDataKey, toastSuccessMessage, toastErrorMessage]
  );

  return { handleKeyDown };
};
