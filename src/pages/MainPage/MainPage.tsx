import { FC } from "react";
import { Options } from "./section-options/Option";
import { Categories } from "./section-categories/Categories"
import { Rent } from "./section-rent/Rent";
import { Services } from "./section-services/Services";
import { About } from "./section-about/About";

export const MainPage: FC = () => {
  return (
    <>
      <Options />
      <Categories />
      <Rent />
      <Services />
      <About />
    </>
  )
}
