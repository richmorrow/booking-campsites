import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "../components/Slider";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Home() {
  // Предложения месяца
  const [offerListings, setOfferListings] = useState(null);
  const [discrict, setDiscrict] = useState(null);
  const [furnished, setFurnished] = useState(null);

  const handleChange = ({ target }) => {
    if (target.value === "Все") {
      setDiscrict(null);

      return;
    }

    setDiscrict(target.value);
  };

  const handleFurnishedChange = ({ target }) => {
    if (target.value === "Все") {
      setFurnished(null);

      return;
    }

    setFurnished(target.value === "true");
  };

  useEffect(() => {
    async function fetchListings() {
      try {
        // получение ссылки
        const listingRef = collection(db, "listings");
        // создание запроса
        const q = query(
          listingRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // выполнение запроса
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  // Предложения аренды
  const [rentListings, setRentListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // получение ссылки
        const listingRef = collection(db, "listings");
        // создание запроса
        const q = query(
          listingRef,
          where("type", "==", "rent"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // выполнение запроса
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRentListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  // Предложения продажи
  const [saleListings, setSaleListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // получение ссылки
        const listingRef = collection(db, "listings");
        // создание запроса
        const q = query(
          listingRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // выполнение запроса
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSaleListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  console.log({ offerListings });

  return (
    <div>
      <Slider />
      <div className="max-w-6xl mx-auto pt-4 space-y-6 flex h-[100px]">
        <div className="m-6 mb-6">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Выберите область
          </label>
          <select
            onChange={handleChange}
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Все</option>
            <option value="Бре">Брест</option>
            <option value="Вит">Витебск</option>
            <option value="Гом">Гомель</option>
            <option value="Гро">Гродно</option>
            <option value="Мин">Минск</option>
            <option value="Мог">Могилевская</option>
          </select>
        </div>
        <div className="m-2 mb-6">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Мебель
          </label>
          <select
            onChange={handleFurnishedChange}
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Все</option>
            <option value={true}>Есть</option>
            <option value={false}>Нет</option>
          </select>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Предложения со скидкой
            </h2>
            <Link to="/offers">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Показать больше
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {offerListings
                .filter((listing) =>
                  discrict ? listing.data.address.includes(discrict) : listing
                )
                .filter((listing) => {
                  console.log({ furnished }, listing.data.furnished);

                  return furnished !== null
                    ? listing.data.furnished === furnished
                    : listing;
                })
                .map((listing) => (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data}
                    id={listing.id}
                  />
                ))}
            </ul>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Предложения об аренде
            </h2>
            <Link to="/category/rent">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Показать больше
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rentListings
                .filter((listing) =>
                  discrict ? listing.data.address.includes(discrict) : listing
                )
                .map((listing) => (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data}
                    id={listing.id}
                  />
                ))}
            </ul>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Предложения о продаже
            </h2>
            <Link to="/category/sale">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Показать больше
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {saleListings
                .filter((listing) =>
                  discrict ? listing.data.address.includes(discrict) : listing
                )
                .map((listing) => (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data}
                    id={listing.id}
                  />
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
