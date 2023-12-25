import { ChangeEvent, FC } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
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
        value={value}
      />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...fieldProps }, fieldState: { error } }) => {
        return (
          <TextField
            {...{ ...props, ...fieldProps }}
            value={value?.join(",") || ""}
            error={!!error?.message}
            helperText={error?.message ? error.message : null}
            autoComplete='new-password'
            defaultValue={value?.join(",") || ""}
            select
          >
            <FormGroup sx={{ p: 2 }}>{renderOptions()}</FormGroup>
          </TextField>
        );
      }}
    />
  );
};
