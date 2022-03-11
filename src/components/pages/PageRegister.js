import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { useState } from "react"
import styles from "./PageLogin.module.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function PageRegister(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    //validacao da senha
    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);


    return (
        <div className={styles.container}>
            <h1>Registrar</h1>
            <div className={styles.formGroup}>
                
                <TextField size="small"
                variant="outlined"
                className="form-Group"
                label="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                </div>
            
            <div className={styles.formGroup}>
                
            <TextField size="small"
            variant="outlined"
            className="form-Group"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.formGroup}>
                <FormControl variant="outlined"
                size="small"
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
             { password && ( 
               <div>
                    <div>
                        <small className={hasSixChar ? "text-success" : "text-danger"}>Pelo menos 6 caracteres</small>
                    </div>
                    <div>
                        <small className={hasLowerChar ? "text-success" : "text-danger"}>uma letra minuscula</small>
                    </div>
                    <div>
                        <small className={hasUpperChar ? "text-success" : "text-danger"}>uma letra maiuscula</small>
                    </div>
                    <div>
                        <small className={hasNumber ? "text-success" : "text-danger"}>um numero</small>
                    </div>
                    <div>
                        <small className={hasSpecialChar ? "text-success" : "text-danger"}>um símbolo</small>
                    </div>
                </div>)}
            </div> 
            <div className={styles.formGroup}>
                
                <TextField size="small"
                type="password"
                variant="outlined"
                className="form-Group"
                label="Confirmar Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
              {password && confirmPassword && (<FormHelperText>
                   {password === confirmPassword ? <span>As senhas conferem</span> : <span>As senhas nao conferem</span>}
                   
                   
               </FormHelperText>)}
                </div>
            <div className="textCenter">
                <Button variant="contained" disabled={
                    !username ||
                    !email ||
                    !password ||
                    !confirmPassword ||
                    password != confirmPassword ||
                    !hasSixChar ||
                    !hasLowerChar ||
                    !hasUpperChar ||
                    !hasNumber ||
                    !hasSpecialChar}>Enviar</Button>
            </div>
        </div>
    )
}
export default PageRegister