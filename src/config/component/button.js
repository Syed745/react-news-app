import { Button } from "@mui/material";


export default function SMButton(props) {
    const { label, onClick } = props
    return (
        <>
            <Button variant="contained" color="success" onClick={onClick}>{label}</Button>
        </>
    )
}
