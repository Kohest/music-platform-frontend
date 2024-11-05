import { useLoginMutation, useRegisterMutation } from "../authApi";
import { saveTokenStorage } from "../../services/auth-token.service";
import { TLoginDataForm } from "../../../widgets/LoginForm/model/types";
import { TRegisterDataForm } from "../../../widgets/RegisterForm/model/types";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [login] = useLoginMutation<TLoginDataForm>();
  const [register] = useRegisterMutation<TRegisterDataForm>();

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await login({ email, password }).unwrap();
      saveTokenStorage(response.token);
      return response;
    } catch (error: any) {
      throw new Error("Не удалось войти в аккаунт");
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await register({ name, email, password }).unwrap();
      saveTokenStorage(response.token);
      return response;
    } catch (error: any) {
      throw new Error("Не удалось зарегистрировать аккаунт");
    }
  };
  const logout = () => {
    try {
      Cookies.remove("accessToken");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    loginUser,
    registerUser,
    logout,
  };
};
