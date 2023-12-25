import * as yup from "yup";

export const AddAccountSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().required("Required"),
  image: yup.string().url().required("Required"),
  permissions: yup.array().of(yup.string()),
});
