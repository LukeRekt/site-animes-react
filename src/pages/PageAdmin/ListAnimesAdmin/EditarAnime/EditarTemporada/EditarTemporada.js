import { useState } from 'react';
import EditarEpLayout from '../layoult/EditarEp/EditarEpLayoult';
import styles from './EditarTemporada.module.css'
import { MdOutlineAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
function EditarTemporada(){
    return (
        <div className={styles.container}>
            <EditarEpLayout/>
            <div className={styles.adicionarEp}>
            <Link to={`/admin/adicionar/1/1`}>
            <MdOutlineAdd/>
            </Link>
            </div>
        </div>
    )
                
            

}
export default EditarTemporada