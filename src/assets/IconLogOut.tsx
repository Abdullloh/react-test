import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { LogOutSvg } from "./svgs";

export const IconLogOut: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={LogOutSvg} {...props} />;
};
