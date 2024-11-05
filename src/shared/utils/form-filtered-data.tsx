import { IUpdateProfileRequest } from "../../entities/auth/types";

export const filterFormData = (data: IUpdateProfileRequest) => {
  return Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== "")
  );
};
