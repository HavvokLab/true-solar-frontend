import { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false);

  const { name, label, value, error = null, onChange } = props;

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    // <TextField
    //     variant="outlined"
    //     type={type}
    //     label={label}
    //     name={name}
    //     value={value}
    //     onChange={onChange}
    //     {...(error && { error: true, helperText: error })}
    //     fullWidth
    // />
    <FormControl variant="outlined" error={!!error}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        name={name}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
