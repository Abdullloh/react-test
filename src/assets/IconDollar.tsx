import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { DollarSvg } from "./svgs";

export const IconDollar: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={DollarSvg} {...props} />;
};
