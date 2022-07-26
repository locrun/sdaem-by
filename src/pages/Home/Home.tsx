import { FC } from "react";
import { Options } from "./section-options/Options";
import { Types } from "./section-types/Types"
import { Rent } from "./section-rent/Rent";
import { Presentation } from "./section-presentation/Presentation";
import { About } from "./section-about/About";

export const Home: FC = () => {

  return (
    <>
      <Options />
      <Types />
      <Rent />
      <Presentation />
      <About />
    </>
  )
}
