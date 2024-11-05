import React from "react";

const ErrorPage = () => {
  return (
    <div className="ml-[30px]">
      <div className="mt-[35px] mb-[25px]">
        <h1 className="text-[#222] text-[45px]">Ошибка 404</h1>
      </div>
      <div className="mt-[20px]">
        <p>Вы попали на несуществующую страницу.</p>
        <p>
          Вероятно, это произошло из-за опечатки или неправильной раскладки
          клавиатуры.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
