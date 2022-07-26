import { useState, useEffect } from "react";

import { useAppSelector } from "../hooks/redux/redux-hooks";

import { useLocation } from "react-router";

import { path } from "../constants/path";

const data = [
  { city: "Минск", name: "Минске" },
  { city: "Гомель", name: "Гомеле" },
  { city: "Брест", name: "Бресте" },
  { city: "Витебск", name: "Витебске" },
  { city: "Гродно", name: "Гродно" },
  { city: "Могилев", name: "Могилеве" },
];

export const useTitle = () => {
  const location = useLocation();

  const { flatsData } = useAppSelector((state) => state.flats);
  const { cottagesData } = useAppSelector((state) => state.cottages);
  const { bathsData } = useAppSelector((state) => state.baths);
  
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case path.APARTMENTS:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === flatsData.cityName) {
            setTitle(`Аренда квартир на сутки в ${data[i].name}`);
          } else if (!flatsData.cityName) {
            setTitle("Аренда квартир");
          }
        }
        break;
      case path.COTTAGES:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === cottagesData.cityName) {
            setTitle(`Аренда коттеджей и усадьб  в ${data[i].name}`);
          } else if (!cottagesData.cityName) {
            setTitle("Аренда коттеджей и усадьб");
          }
        }
        break;
      case path.BATHS:
        for (let i = 0; i < data.length; i++) {
          if (data[i].city === bathsData.cityName) {
            setTitle(`Аренда бань и саун в ${data[i].name}`);
          } else if (!bathsData.cityName) {
            setTitle("Аренда бань и саун");
          }
        }
        break;
      default:
    }
  }, [
    bathsData.cityName,
    cottagesData.cityName,
    flatsData.cityName,
    location.pathname,
  ]);

  return {
    title,
  };
};
