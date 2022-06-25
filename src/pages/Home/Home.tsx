import { FC } from "react";
import { Options } from "./section-options/Option";
import { Categories } from "./section-categories/Categories"
import { Rent } from "./section-rent/Rent";
import { Presentation } from "./section-presentation/Presentation";
import { About } from "./section-about/About";

export const Home: FC = () => {
  return (
    <>
      <Options />
      <Categories />
      <Rent />
      <Presentation />
      <About />
    </>
  )
}
