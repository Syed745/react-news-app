import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SMButton from "../component/button";
import SMInput from "../component/input";


export default function SMLogin() {
    const navigate = useNavigate()
    const loginUser = () => {
        navigate('/', {
            state: {
                user: true
            }
        })
    }

    return (
        <>
            <Box>
                <Box sx={{ padding: 1 }}>
                    <SMInput label="Email" type="email" />
                </Box>
                <Box>
                    <SMInput label="Password" type="password" />
                </Box>
                <Box sx={{ padding: 1 }}>
                    <SMButton onClick={loginUser} label="Login" />
                </Box>
            </Box>
        </>
    )
}
