import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { UserGroupSvg } from "./svgs";

export const IconGroup: FC<SvgIconProps> = (props) => {
  return <SvgIcon component={UserGroupSvg} {...props} />;
};
