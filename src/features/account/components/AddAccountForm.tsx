import { Box, Button, Stack } from "@mui/material";
import { DefaultValues, FieldErrors, useForm } from "react-hook-form";
import { TextFieldController } from "../../../components/TextFieldController/TextFieldController";
import { ChangeEvent, FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddAccountSchema } from "../schemas";
import { SelectFieldPermissions } from "./SelectFieldPermissions";

interface IAddAccountForm {
  defaultValues: DefaultValues<any>;
  onValid: (values: any) => void;
}

export const AddAccountForm: FC<IAddAccountForm> = ({
  defaultValues,
  onValid,
}) => {
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(AddAccountSchema),
  });
  console.log(defaultValues);

  const onSubmit = (values: any) => {
    console.log(values);

    onValid(values);
  };

  const onInvalid = (errors: FieldErrors<any>) => {
    console.log("onInvalid", errors);
  };

  const onSelectPermission = (e: ChangeEvent<HTMLInputElement>) => {
    const prev = getValues();
    console.log(prev);
    const { value } = e.target;

    if (prev?.permissions?.length > 0 && prev.permissions.includes(value)) {
      setValue(
        "permissions",
        prev.permissions.filter((item) => item !== value)
      );
    } else {
      setValue("permissions", [...prev.permission, value]);
    }
  };
  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <Box mb={2}>
        <TextFieldController
          label='name'
          name='name'
          control={control}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextFieldController
          label='email'
          name='email'
          control={control}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextFieldController
          label='image'
          name='image'
          control={control}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <SelectFieldPermissions
          onChange={onSelectPermission}
          control={control}
          label='permissions'
          fullWidth
          multiline
          name='permissions'
        />
      </Box>
      <Stack direction='row' justifyContent='flex-end'>
        <Button type='submit' color='primary' variant='contained'>
          {"action.create"}
        </Button>
      </Stack>
    </Box>
  );
};
