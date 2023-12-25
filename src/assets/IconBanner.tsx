import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { UnionSvg } from "./svgs";

export const IconBanner: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={UnionSvg} {...props} />;
};
