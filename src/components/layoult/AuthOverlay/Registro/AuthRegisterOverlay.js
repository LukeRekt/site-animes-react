import styles from "./AuthRegisterOverlay.module.css"
import PageRegister from "../../../../pages/Auth/PageRegister"
import { AiOutlineClose } from "react-icons/ai";

import { useRegisterVisibility } from '../../../../context/RegisterVisibility'

function AuthRegisterOverlay() {
    const { registerVisibility, setRegisterVisibility } = useRegisterVisibility();

    return (
        <div> {registerVisibility ? (<div style={{ opacity: "1" }} className={styles.container}>
            <div className={styles.searchWrapper}><PageRegister /><div className={styles.fechar}><AiOutlineClose style={{ cursor: "pointer" }} onClick={() => setRegisterVisibility(false)} /></div></div>
        </div>) : (<div style={{ visibility: "hidden", opacity: "0" }} className={styles.container}></div>)}</div>

    )
}
export default AuthRegisterOverlay