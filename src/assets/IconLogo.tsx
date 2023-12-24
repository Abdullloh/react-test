import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { LogoSvg } from "./svgs";

export const IconLogo: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={LogoSvg} viewBox='0 0 25 25' {...props} />;
};
