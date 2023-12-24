import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { MoreDotsSvg } from "./svgs";

export const IconMoreDots: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={MoreDotsSvg} {...props} />;
};
