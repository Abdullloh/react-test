import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { PaperSvg } from "./svgs";

export const IconBlog: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={PaperSvg} {...props} />;
};
