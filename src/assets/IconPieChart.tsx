import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { PieChartSvg } from "./svgs";

export const IconPieChart: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={PieChartSvg} viewBox='0 0 25 25' {...props} />;
};
