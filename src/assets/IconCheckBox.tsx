import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { CheckboxSvg } from "./svgs";

export const IconCheckBox: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={CheckboxSvg} {...props} />;
};
