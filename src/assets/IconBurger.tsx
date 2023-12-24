import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { BurgerSvg } from "./svgs";

export const IconBurger: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={BurgerSvg} viewBox='0 0 25 25' {...props} />;
};
