import * as Yup from "yup";

export const validate = (): object => Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
      //.oneOf([Yup.ref("password"), null], "Passwords must match"),
})