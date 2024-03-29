import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { useState } from "react"
import styles from "./PageLogin.module.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { UserContext } from "../../UserContext"
import { useContext } from "react"
import ReCAPTCHA from 'react-google-recaptcha';
import { useRegisterVisibility } from '../../context/RegisterVisibility'
//funcoes
import { register } from '../../api/user'

//const userAvatar = "AA";

function PageRegister() {
    const { user } = useContext(UserContext)
    
    const userBanner = "https://aniyuki.com/wp-content/uploads/2022/01/aniyuki-zenitsu-agatsuma-31.gif";
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const { setRegisterVisibility } = useRegisterVisibility();

    //validacao da senha
    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);


    function onChange(value) {
        console.log('Captcha value:', value);
        setCaptcha(true);
      }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userAvatar = `${process.env.REACT_APP_API_URL}/static/imagens/avatars/${username}.png`;
            const res = await register({ username, email, password, userAvatar, userBanner });
            if (res.error) toast.warning(res.error);
            else {
                toast.success(res.message);
                setRegisterVisibility(false);
                navigate('/');
            }
        } catch (err) {
            toast.error(err);
        }
    }

    return (
        <div className={styles.container}>

<div className={styles.leftform}>
                <div className={styles.animationCanvas}>
                    
                    <img src={`${process.env.REACT_APP_API_URL}/static/imagens/assets/nezuko-running.gif`} alt="" />
                </div>
            </div>

            <form className={styles.login}>
            <h1>REGISTRO DO USUÁRIO</h1>
                <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {showPassword ? ( <div><input type="text" autoComplete="true" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} /></div>) : (<div><input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} /></div>)}
                {showPassword ? ( <div><input type="text" autoComplete="true" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></div>) : (<div><input type="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></div>)}

<ReCAPTCHA
        sitekey="6Ldy4acfAAAAACb4ewQbknKrJSQjQjQ0rZVTbz-_"
        onChange={onChange}
        theme="dark"
        />
                <button className={styles.botao} onClick={handleRegister} disabled={
                    !username ||
                    !email ||
                    !password ||
                    !confirmPassword ||
                    password != confirmPassword ||
                    !hasSixChar ||
                    !hasLowerChar ||
                    !hasUpperChar ||
                    !hasNumber ||
                    !hasSpecialChar ||
                    captcha == false} >Registrar</button>
    <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<VisibilityIcon />) : (<VisibilityOffIcon />)}
                </IconButton>
                

                {password && (
                    <div className={styles.verificaSenha}>
                        <div>

                            {hasSixChar ? (<span className={styles.text_success}><CheckCircleIcon className="mr-1" fontSize="small" />
                                <small>Pelo menos 6 caracteres</small></span>) : (<span className={styles.text_error}>
                                    <CancelIcon className="mr-1"
                                        fontSize="small" />
                                    <small>Pelo menos 6 caracteres</small>
                                </span>)}
                        </div>
                        <div>

                            {hasLowerChar ? (<span className={styles.text_success}><CheckCircleIcon className="mr-1" fontSize="small" color="green" />
                                <small>Pelo menos uma letra minuscula</small></span>) : (<span className={styles.text_error}>
                                    <CancelIcon className="mr-1"
                                        fontSize="small" />
                                    <small>Pelo menos uma letra minuscula</small>
                                </span>)}
                        </div>
                        <div>

                            {hasUpperChar ? (<span className={styles.text_success}><CheckCircleIcon className="mr-1" fontSize="small" />
                                <small>Pelo menos uma letra maiuscula</small></span>) : (<span className={styles.text_error}>
                                    <CancelIcon className="mr-1"
                                        fontSize="small" />
                                    <small>Pelo menos uma letra maiuscula</small>
                                </span>)}
                        </div>
                        <div>

                            {hasNumber ? (<span className={styles.text_success}><CheckCircleIcon className="mr-1" fontSize="small" />
                                <small>Pelo menos um numero</small></span>) : (<span className={styles.text_error}>
                                    <CancelIcon className="mr-1"
                                        fontSize="small" />
                                    <small>Pelo menos um numero</small>
                                </span>)}
                        </div>
                        <div>

                            {hasSpecialChar ? (<span className={styles.text_success}><CheckCircleIcon className="mr-1" fontSize="small" />
                                <small>Pelo menos um caractere especial</small></span>) : (<span className={styles.text_error}>
                                    <CancelIcon className="mr-1"
                                        fontSize="small" />
                                    <small>Pelo menos um caractere especial</small>
                                </span>)}
                        </div>
                    </div>)}
                {password && confirmPassword && (password === confirmPassword ? <span>As senhas conferem</span> : <span>As senhas nao conferem</span>)}
            </form>

        </div>
    )
}
export default PageRegister