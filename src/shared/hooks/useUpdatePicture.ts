import { toast } from "react-toastify";
import { useCallback } from "react";

interface UseFileUploadProps {
  mutationFunction: any;
  formDataKey: string;
  toastSuccessMessage: string;
  toastErrorMessage: string;
}

export const useFileUpload = ({
  mutationFunction,
  formDataKey,
  toastSuccessMessage,
  toastErrorMessage,
}: UseFileUploadProps) => {
  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>, id?: string) => {
      const file = event.target.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append(formDataKey, file);
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

  return { handleFileChange };
};
