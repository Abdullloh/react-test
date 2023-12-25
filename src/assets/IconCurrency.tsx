import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { CurrencySvg } from "./svgs";

export const IconCurrency: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={CurrencySvg} {...props} />;
};
