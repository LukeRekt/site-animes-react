import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PageEpisode(){

    function ListEp(parametros, postsa){
        for (var i = 0; i < postsa.length; i++){
            
            if (postsa[i].id == id){
              if(postsa[i].numero == parametros){
                return postsa[i].video;
              }
            }
          }
    }

    const { id, ep } = useParams();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/episodios/`)
            .then(res => {
                setPosts(res.data)
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <video src={ListEp(ep, posts)} controls></video>
        </div>
    )
}

export default PageEpisode