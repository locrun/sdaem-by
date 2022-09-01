import { FC } from "react";
import { Filter } from "./section-filter/Filter";
import { Gallery } from "./section-gallery/Gallery"
import { Rent } from "./section-rent/Rent";
import { Presentation } from "./section-presentation/Presentation";
import { About } from "./section-about/About";

export const Home: FC = () => {

  return (
    <>
      <Filter />
      <Gallery />
      <Rent />
      <Presentation />
      <About />
    </>
  )
}
