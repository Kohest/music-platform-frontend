import React, { useEffect, useState } from "react";
import LoginForm from "../widgets/LoginForm/LoginForm";
import FormHeader from "../widgets/LoginForm/ui/form-header";
import ArrowLink from "../shared/ui/arrow-link";
import RegisterForm from "../widgets/RegisterForm/register-form";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const handleChangeForm = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="flex min-h-screen justify-center items-center flex-col relative">
      <div
        className="bg-[url('https://yastatic.net/s3/passport-auth-customs/customs/_/23a94fcc.jpg')] fixed bg-cover bg-no-repeat
       inset-0 w-full h-full before:bg-[#9191910c] before:absolute before:inset-0"
      />
      <div className="min-h-screen flex flex-col justify-center items-center w-[376px] m-auto">
        <div className="rounded-[32px] bg-[#131317] text-[rgba(247,247,255,.9)] my-[70px] relative w-full">
          <ArrowLink href="/" />
          <div className="p-8 mt-0 overflow-hidden">
            <FormHeader />
            {isRegister ? (
              <RegisterForm changeForm={handleChangeForm} />
            ) : (
              <LoginForm changeForm={handleChangeForm} />
            )}
          </div>
          <div className="text-white text-[16px] py-[15px] absolute text-center w-full z-10">
            Muzz ID - ключ от всех сервисов
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default AuthPage;
