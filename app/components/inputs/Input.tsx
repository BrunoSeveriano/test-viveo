import { ChangeEvent } from "react";

import {
  FormControl,
  InputProps as FormInputProps,
  TextField,
} from "@mui/material";

interface InputProps extends FormInputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  messageError?: string;
  helperText?: string | false | undefined;
  error?: boolean | undefined;
  value?: string | undefined;
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export default function Input({
  name,
  type,
  label,
  helperText,
  error,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <FormControl
      fullWidth
      sx={{ marginBottom: 2, height: 75, marginTop: 0 }}
      variant="outlined"
    >
      <TextField
        type={type}
        variant="outlined"
        margin="normal"
        fullWidth
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        error={error}
        helperText={helperText}
        label={label}
      />
    </FormControl>
  );
}
