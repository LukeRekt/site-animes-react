
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from "./AnimeList.module.css"


function AnimeList(props){

    function testeNome(idUm, idDois, nome){
        if(idUm == idDois){
            return (<div>
                
                
                <div className={styles.AnimeThumb}>
                 
                    <img src="https://subanimes.biz/wp-content/uploads/2022/01/assistir-arifureta-shokugyou-de-sekai-saikyou-2-todos-os-episodios-legendado-hd-subanimes-animes-online-brasil-2022.jpg" alt="" />
                    {nome}
                
                </div>
                </div>
            )
        
        }
    }

    return (
        <div>
           
           {testeNome(props.id, props.iddois, props.nome)}
           
                
                
                </div>
            // /* {testeNome(props.id, props.iddois, props.nome)}
            // {console.log("id " + props.id)}
            // {console.log("iddois " + props.iddois)}
            // {console.log("nome " + props.nome)}
            // {testeNome(props.nome, props.id, props.iddois)} */
        
        
    )
}

export default AnimeList