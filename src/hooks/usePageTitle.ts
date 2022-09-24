import { useState, useEffect } from "react";

import { useAppSelector } from "./redux-hooks";

import { useLocation } from "react-router";

import { path } from "../constants/pages";

const data = [
  { city: "Минск", name: "Минске" },
  { city: "Гомель", name: "Гомеле" },
  { city: "Брест", name: "Бресте" },
  { city: "Витебск", name: "Витебске" },
  { city: "Гродно", name: "Гродно" },
  { city: "Могилев", name: "Могилеве" },
];

export const usePageTitle = () => {
  const location = useLocation();

  const { stateData } = useAppSelector((state) => state.filter);

  const [title, setTitle] = useState("");
  const [rentTitle, setRentTitle] = useState("Аренда квартир");
  const [totalOffersTitle, setTotalOffersTitle] = useState("Всего предложений");

  useEffect(() => {
    switch (location.pathname) {
      case path.home:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === stateData.city) {
            setRentTitle(`Аренда квартир в ${data[i].name}`);
            setTotalOffersTitle(
              `Предложений по ${data[i].name.replace(/.$/, "у")}`
            );
          }
        }
        break;
      case path.apartments:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === stateData.city) {
            setTitle(`Аренда квартир на сутки в ${data[i].name}`);
          } else if (!stateData.city) {
            setTitle("Аренда квартир");
          }
        }
        break;

      case path.cottages:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === stateData.city) {
            setTitle(`Аренда коттеджей и усадьб  в ${data[i].name}`);
          } else if (!stateData.city) {
            setTitle("Аренда коттеджей и усадьб");
          }
        }
        break;
      case path.baths:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === stateData.city) {
            setTitle(`Аренда бань и саун в ${data[i].name}`);
          } else if (!stateData.city) {
            setTitle("Аренда бань и саун");
          }
        }
        break;
      case path.cars:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === stateData.city) {
            setTitle(`Авто на прокат в ${data[i].name}`);
          } else if (!stateData.city) {
            setTitle("Авто на прокат");
          }
        }
        break;
      default:
    }
  }, [location.pathname, stateData.city, rentTitle, setRentTitle]);

  return {
    title,
    rentTitle,
    totalOffersTitle,
  };
};
