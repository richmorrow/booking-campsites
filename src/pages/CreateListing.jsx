import React from "react";
import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    backgroundColor: "#44014C",
    type: "Аренда",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  function onChange() {}
  return (
    <body className="w-full bg-cover bg-center bg-[url(https://images7.alphacoders.com/717/717815.jpg)]">
      <main className="max-w-md px-4 mx-auto bg-gray-100 bg-opacity-90">
        <h1 className="text-3xl text-center pt-4 font-bold">Заполните форму</h1>
        <form>
          <p className="text-lg mt-6 font-semibold">Аренда / Продажа </p>
          <div className="flex ">
            <button
              type="button"
              id="type"
              value="rent"
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            type === "Аренда" ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Аренда
            </button>
            <button
              type="button"
              id="type"
              value="sell"
              onClick={onChange}
              className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            type === "Продажа" ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Продажа
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Наименование</p>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onChange}
            placeholder="Например: Кемпинг «Рыбчино»"
            maxLength="32"
            minLength="10"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 
          rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <div className="flex space-x-6 justify-start mb-6">
            <div>
              <p className="text-lg font-semibold">Спальные места</p>
              <input
                type="number"
                id="bedrooms"
                value={bedrooms}
                onChange={onChange}
                min="1"
                max="50"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 
              ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Душевые кабины</p>
              <input
                type="number"
                id="bathrooms"
                value={bathrooms}
                onChange={onChange}
                min="0"
                max="50"
                required
                className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 
              ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
            </div>
          </div>
          <p className="text-lg mt-6 font-semibold">Парковочные места</p>
          <div className="flex ">
            <button
              type="button"
              id="parking"
              value={true}
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            !parking ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Есть
            </button>
            <button
              type="button"
              id="parking"
              value={false}
              onClick={onChange}
              className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            parking ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Нет
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Мебель</p>
          <div className="flex ">
            <button
              type="button"
              id="furnished"
              value={true}
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            !furnished ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Есть
            </button>
            <button
              type="button"
              id="furnished"
              value={false}
              onClick={onChange}
              className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            furnished ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Нет
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Адрес</p>
          <textarea
            type="text"
            id="address"
            value={address}
            onChange={onChange}
            placeholder="Расположение"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 
          rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <p className="text-lg font-semibold">Описание</p>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={onChange}
            placeholder="Например: Кемпинг «Рыбчино» — сказочное место для любителей активного отдыха на природе"
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 
          rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <p className="text-lg font-semibold">Специальное предложение</p>
          <div className="flex mb-6">
            <button
              type="button"
              id="offer"
              value={true}
              onClick={onChange}
              className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            !offer ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Да
            </button>
            <button
              type="button"
              id="offer"
              value={false}
              onClick={onChange}
              className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md 
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
            offer ? "bg-white text-black" : "bg-red-600 text-white"
          }`}
            >
              Нет
            </button>
          </div>
          <div className="flex justify-start items-center mb-6">
            <div>
              <p className="text-lg font-semibold">Цена</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="regularPrice"
                  value={regularPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 
                ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                {type === "Аренда" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Месяц
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {offer && (
            <div className="flex justify-start items-center mb-6">
              <div>
                <p className="text-lg font-semibold">Скидка</p>
                <div className="flex w-full justify-center items-center space-x-6">
                  <input
                    type="number"
                    id="discountedPrice"
                    value={discountedPrice}
                    onChange={onChange}
                    min="50"
                    max="400000000"
                    required={offer}
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 
                ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                  />
                  {type === "Аренда" && (
                    <div className="">
                      <p className="text-md w-full whitespace-nowrap">
                        $ / Месяц
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="mb-6">
            <p className="text-lg font-semibold">Фотографии</p>
            <p className="text-sm text-gray-600">
              Первое изображение будет обложкой (Кол-во: не более 6 фото)
            </p>
            <input
              type="file"
              id="images"
              onChange={onChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 text-gray-700
           bg-white border border-gray-300 
            rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
            />
          </div>
          <button
            type="submit"
            className="mb-6 w-full px-7 py-3 bg-blue-700 text-white font-medium text-sm uppercase 
        rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg 
        active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Создать объявление
          </button>
        </form>
      </main>
    </body>
  );
}
