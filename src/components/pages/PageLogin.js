import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { useState, useContext } from "react"
import styles from "./PageLogin.module.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {UserContext} from "../../UserContext"

import {login} from '../../api/user'


function PageLogin(){
    const {user} = useContext(UserContext)
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    {user ? navigate("/") : console.log("ok")}
    

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await login({email, password});
            if(res.error) toast.error(res.error);
            else{
                toast.success(res.message);
                setUser(res.username)

                navigate("/")
            }
        }catch (err){
            toast.error(err);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            
            <div className={styles.formGroup}>
            <TextField size="big"
            color="red"
            variant="outlined"
            className="form-Group"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.formGroup}>
                <FormControl variant="outlined"
                size="big"
                className="formGroup">
                <InputLabel>Senha</InputLabel>     
                <OutlinedInput
                label="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                    <InputAdornment>
                    <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? ( <VisibilityIcon/> ) : (<VisibilityOffIcon/>)}
                    </IconButton>
                    </InputAdornment>
                }/>               
                </FormControl>
            </div>
            <div className="textCenter">
                <Button variant="contained" disabled={!email || !password}
                onClick={handleLogin}>Enviar</Button>
            </div>
        </div>
    )
}
export default PageLogin