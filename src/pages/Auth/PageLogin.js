import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { useState, useContext } from "react"
import styles from "./PageLogin.module.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReCAPTCHA from 'react-google-recaptcha';
import { UserContext } from "../../UserContext"
import { useLoginVisibility } from '../../context/LoginVisibility'

import { login } from '../../api/user'


function PageLogin() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const { setLoginVisibility } = useLoginVisibility();
    // { user ? navigate("/") : console.log("ok") }


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await login({ email, password });
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                setUser(res.username)
                setLoginVisibility(false);
                 navigate("/")
                 window.location.reload();
            }
        } catch (err) {
            toast.error(err);
        }
    }
    function onChange(value) {
        console.log('Captcha value:', value);
        setCaptcha(true);
      }

    return (
        <div className={styles.container}>


            {/* <div className={styles.formGroup}>
                <TextField size="medium"
                    variant="outlined"
                    className="form-Group"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div> */}


            <div className={styles.leftform}>
                <div className={styles.animationCanvas}>
                    
                    <img src="http://localhost:3232/static/imagens/assets/nezuko-running.gif" alt="" />
                </div>
            </div>




            <form className={styles.login}>
                <h1>LOGIN DO USUÁRIO</h1>
                <input type="email" autoComplete="true" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                
                {showPassword ? ( <div><input type="text" autoComplete="true" placeholder="Senha " value={password} onChange={(e) => setPassword(e.target.value)} /></div>) : (<div><input type="password" autoComplete="true" placeholder="Senha " value={password} onChange={(e) => setPassword(e.target.value)} /></div>)}
                <small><span>Esqueceu sua senha ?</span></small>
                <div className="captcha" style={{transform:"scale(1.1, 1)", transform: "translate(-5px, 0px)", transformOrigin:"0 0"}}>
                <ReCAPTCHA
        sitekey="6Ldy4acfAAAAACb4ewQbknKrJSQjQjQ0rZVTbz-_"
        onChange={onChange}
        theme="dark"
        />
        </div>
                <button onClick={handleLogin} className={styles.botao} disabled={!email ||
                    !password || captcha == false}>Login</button>

                    <div id={styles.bottomFormText}>
                    <small>Novo usuário? <span>Cadastre-se</span></small>
                    <small>Consulte os <span>Termos de usuário.</span></small>
                    </div>
                   
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}
                </IconButton>
            </form>




            {/*                 
                <FormControl variant="outlined"
                    size="medium"
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
                                    {showPassword ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}
                                </IconButton>
                            </InputAdornment>
                        } />
                </FormControl> */}

            {/* <div className="textCenter">
                <Button variant="contained" disabled={!email || !password}
                    onClick={handleLogin}>Enviar</Button>
            </div> */}
        </div>
    )
}
export default PageLogin