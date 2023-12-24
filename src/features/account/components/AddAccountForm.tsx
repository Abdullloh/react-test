import { Box, Button, Stack } from "@mui/material";
import { DefaultValues, FieldErrors, useForm } from "react-hook-form";
import { TextFieldController } from "../../../components/TextFieldController/TextFieldController";
import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddAccountSchema } from "../schemas";

interface IAddAccountForm {
  defaultValues: DefaultValues<any>;
  onValid: (values: any) => void;
}

export const AddAccountForm: FC<IAddAccountForm> = ({
  defaultValues,
  onValid,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(AddAccountSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);

    onValid(values);
  };

  const onInvalid = (errors: FieldErrors<any>) => {
    console.log("onInvalid", errors);
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
        {/* <TextFieldController
          label='permissions'
          name='permissions'
          control={control}
          fullWidth
        /> */}
      </Box>
      <Stack direction='row' justifyContent='flex-end'>
        <Button type='submit' color='primary' variant='contained'>
          {"action.create"}
        </Button>
      </Stack>
    </Box>
  );
};
