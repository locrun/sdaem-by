
import { FC } from "react"

interface IPropsTitle {
  className?: string
  children: React.ReactNode
}

export const Title: FC<IPropsTitle> = ({ children, className }) => {

  return (
    <span
      className={className}
    >
      {children}
    </span>
  )
}