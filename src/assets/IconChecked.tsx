import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { CheckedSvg } from "./svgs";

export const IconChecked: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={CheckedSvg} {...props} />;
};
