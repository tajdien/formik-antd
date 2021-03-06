import { Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputProps } from "antd/lib/input";

export const InputField = (
  props: {
    name: string;
  } & InputProps
) => (
  <Field name={props.name}>
    {({ field }: FieldProps) => {
      return (
        <Input
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
      );
    }}
  </Field>
);
