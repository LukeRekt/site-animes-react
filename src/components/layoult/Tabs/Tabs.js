//EM BREVE ESSA TAB SERA ALTERADA

import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import "./App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core"
import styles from "./Tabs.module.css"
import AnimeList from '../AnimeList/AnimeList'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core'
import { orange, green } from "@material-ui/core/colors";
function Tabsa(props) {
  const theme = createTheme({
    overrides: {
      MuiTabs: {
        root: {
          backgroundColor: "#181829",
        },
        indicator: {
          backgroundColor: orange[700]
        }
      },
      MuiTab: {
        root: {
          "&:hover": {
            backgroundColor: orange[800],
            color: orange[800]
          }
        },
        selected: {
          backgroundColor: orange[100],
          color: orange[700],
          "&:hover": {
            backgroundColor: green[100],
            color: green[700]
          }
        }
      }
    }
  });


  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/${props.id}`)
      .then(res => {
        setPosts(res.data.episodios)
        console.log(res.data.episodios)
        console.log(props.id)
      })
  }, [props.id])

  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val)
  }
  const [value, setValue] = useState(0)

  function Teste(propsa){
    
    var indents = [];
    for (var i = 0; i < propsa; i++) {
      indents.push(<span className='indent' key={i}></span>);
    }
    return indents;
  }

  return (

    <div className={styles.container}>
      {/* outro map deve ser adicionado para listar todas as temporadas do anime */}
      <MuiThemeProvider theme={theme}>
        <AppBar style={{ minWidth: 370, width: "100%" }} position="relative">
          <Tabs value={value} onChange={handleTabs}>
        {Teste(props.temporadas).map((post, index) =>
              <Tab label={`Temporada ${index + 1}`} />)}
  
          </Tabs>
        </AppBar>
        
        {Teste(props.temporadas).map((post, index) =>
        
             <TabPanel value={value} index={index}>
             <div className={styles.AnimeListContainer}>
               {posts
               .sort((a, b) => a.numero > b.numero ? 1 : -1)
               .map(post =>
               
                 post.temporada == index + 1 ? (<AnimeList key={post.numero} nome={post.nome} id={post.id} iddois={props.id} episodio={post.numero} temporada={index + 1} imagem={`${process.env.REACT_APP_API_URL}/${post.animeImagem}`} />) : (<></>))}
   
   
               {/* <AnimeList nome={props.nome}/> */}
   
             </div>
   
           </TabPanel>)}
        
      </MuiThemeProvider>
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index } = props

  return (<div>
    {
      value === index && (
        children
      )
    }
  </div>)
}

export default Tabsa