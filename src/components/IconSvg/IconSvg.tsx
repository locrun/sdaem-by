import { FC } from "react";
import sprite from "../../assets/images/sprite.svg"

interface IPropsSvg {
  id: string;
  className?: string
}

export const IconSvg: FC<IPropsSvg> = (props) => {
  const { id, className } = props;
  return (
    <svg className={className}>
      <use href={sprite + id} />
    </svg>
  )
}