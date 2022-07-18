import { useState } from 'react';
import EditarEpLayout from '../layoult/EditarEp/EditarEpLayoult';
import styles from './EditarTemporada.module.css'
import { MdOutlineAdd } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
function EditarTemporada(){
    const { id, temporada } = useParams();
    
    return (
        <div className={styles.container}>
            <EditarEpLayout/>
            <div className={styles.adicionarEp}>
            <Link to={`/admin/adicionar/${id}/${temporada}`}>
            <MdOutlineAdd/>
            </Link>
            </div>
        </div>
    )
                
            

}
export default EditarTemporada