import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { SearchSvg } from "./svgs";

export const IconSearch: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={SearchSvg} {...props} />;
};
