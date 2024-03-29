import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Письмо отправлено");
    } catch (error) {
      toast.error("Не удалось отправить сброшенный пароль");
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Забыли пароль?</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[70%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://cdn.standardmedia.co.ke/images/wysiwyg/images/WqAI9hSMJNeCY8s7VpJph5DJWTFv1U42sBm1MglN.jpg"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[70%] lg:w-[40%] lg:ml-20 ">
          <form onSubmit={onSubmit}>
            <input
              type="Email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Введите email"
              className="mb-6 w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between whitespace-nowrap text-md sm:text-base md:text-base">
              <p className="mb-6">
                Нет учетной записи?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Регистрация
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1"
                >
                  Авторизация
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              восстановить пароль
            </button>
            <div className="flex items-center my-3 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">ИЛИ</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
