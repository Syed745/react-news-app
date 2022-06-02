import { TextField } from "@mui/material";

export default function SMInput(props) {
    const { label, type } = props
  return (
    <>
    <TextField id="outlined-basic"  label={label} type={type} variant="outlined" />
    </>
  )
}
