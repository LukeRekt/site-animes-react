
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from "./Tabs.module.css"
   


function AnimeList(props){

    function testeNome(idUm, idDois, nome){
        if(idUm == idDois){
            return (<div>
                {nome}
            </div>)
        
        }
    }

    return (
        <div>

            {testeNome(props.id, props.iddois, props.nome)}
            {console.log("id " + props.id)}
            {console.log("iddois " + props.iddois)}
            {console.log("nome " + props.nome)}
            {/* {testeNome(props.nome, props.id, props.iddois)} */}
        </div>
    )
}

export default AnimeList