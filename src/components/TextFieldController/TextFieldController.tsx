import { FC, FocusEvent } from "react";
import { Control } from "react-hook-form";
import { Controller, Noop } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

export type TextFieldControllerProps = TextFieldProps & {
  control: Control<any>;
  name: string;
};

export const TextFieldController: FC<TextFieldControllerProps> = ({
  control,
  name,
  ...props
}) => {
  //   const { t } = useTranslation();

  const handleChange =
    (onChange?: (...event: any[]) => void) =>
    (e: FocusEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      if (props.onChange) props.onChange(e);
    };

  const handleBlur = (onBlur?: Noop) => (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur();
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { ref, onChange, onBlur, value, ...fieldProps },
        fieldState: { error },
      }) => (
        <TextField
          {...{ ...props, ...fieldProps }}
          value={value || ""}
          onChange={handleChange(onChange)}
          onBlur={handleBlur(onBlur)}
          inputRef={ref}
          error={!!error?.message}
          helperText={error?.message ? error.message : null}
        />
      )}
    />
  );
};
