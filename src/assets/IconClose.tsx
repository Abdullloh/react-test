import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { CloseSvg } from "./svgs";

export const IconClose: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={CloseSvg} {...props} />;
};
