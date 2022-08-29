
import { FC } from "react";
import { Circles } from "react-loader-spinner";
import classes from "./Spinner.module.scss";


interface IPropsSpinner {
  visible?: boolean;
}
export const Spinner: FC<IPropsSpinner> = ({ visible }) => {
  return (
    <Circles
      color="#9d94ff"
      wrapperClass={classes.flex}
      height={100}
      width={100}
      visible={visible}
    />
  );
};
