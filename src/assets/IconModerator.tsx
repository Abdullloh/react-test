import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { DocCheckSvg } from "./svgs";

export const IconModerator: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={DocCheckSvg} {...props} />;
};
