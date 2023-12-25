import { ChangeEvent, FC, MouseEvent, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popover,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { IOption } from "../models";
import { UserPermissionEnums } from "../enums";
import { IconCheckBox, IconChecked } from "../../../assets";

export type ISelectFieldPermissions = Omit<
  TextFieldProps,
  "select" | "onChange"
> & {
  control: Control<any>;

  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const options: IOption[] = Object.values(UserPermissionEnums).map(
  (permission) => ({
    label: permission,
    value: permission,
  })
);

export const SelectFieldPermissions: FC<ISelectFieldPermissions> = ({
  control,
  name,
  onChange: onCustomChange,
  ...props
}) => {
  const [optionsMenuOpen, setOptionsMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setOptionsMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onCustomChange) onCustomChange(e);
  };

  const renderOptions = () => {
    return options.map(({ label, value }) => (
      <FormControlLabel
        key={value}
        onClick={(e) => e.stopPropagation()}
        control={
          <Checkbox
            onChange={handleChange}
            value={value}
            icon={<IconCheckBox color='inherit' />}
            checkedIcon={<IconChecked />}
          />
        }
        label={label}
      />
    ));
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, ref, ...fieldProps },
          fieldState: { error },
        }) => (
          <TextField
            {...{ ...props, ...fieldProps }}
            value={value.join(",")}
            error={!!error?.message}
            helperText={error?.message}
            autoComplete='new-password'
            inputRef={ref}
            onClick={handleClick}
            label={props.label}
          />
        )}
      />
      <Popover
        sx={{ width: "100%" }}
        open={optionsMenuOpen}
        anchorEl={anchorEl}
        onClose={() => setOptionsMenuOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <FormGroup sx={{ p: 2, width: "100%" }}>{renderOptions()}</FormGroup>
      </Popover>
    </>
  );
};
