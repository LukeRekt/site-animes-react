import styles from "./AuthLoginOverlay.module.css"
import PageLogin from "../../../../pages/Auth/PageLogin"
import { AiOutlineClose } from "react-icons/ai";

import { useLoginVisibility } from '../../../../context/LoginVisibility'

function AuthLoginOverlay() {
    const { loginVisibility, setLoginVisibility } = useLoginVisibility();

    return (
        <div> {loginVisibility ? (<div style={{ opacity: "1" }} className={styles.container}>
            <div className={styles.searchWrapper}><PageLogin /><div className={styles.fechar}><AiOutlineClose style={{ cursor: "pointer" }} onClick={() => setLoginVisibility(false)} /></div></div>
        </div>) : (<div style={{ visibility: "hidden", opacity: "0" }} className={styles.container}></div>)}</div>

    )
}
export default AuthLoginOverlay