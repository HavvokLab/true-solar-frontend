import { TextField } from "@material-ui/core";

export default function Input(props) {
  // const classes = useStyles();
  const {
    name,
    style = null,
    type = "text",
    label,
    value,
    error = null,
    onChange,
    InputProps = null,
    placeholder = ""
  } = props;
  return (
    <TextField
      variant="outlined"
      type={type}
      label={label}
      name={name}
      value={value}
      placeholder={placeholder}
      style={style}
      InputProps={InputProps}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      fullWidth
    />
  );
}
