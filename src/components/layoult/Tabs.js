import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import "./App.css";
import {Tabs, Tab, AppBar} from "@material-ui/core"
import styles from "./Tabs.module.css"
import AnimeList from './AnimeList'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, pink, green } from "@material-ui/core/colors";
function Tabsa(props) {
    const theme = createMuiTheme({
        overrides: {
          MuiTabs: {
            root: {
                backgroundColor: orange[700],
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
    axios.get('http://localhost:4000/episodios')
    .then(res => {
        setPosts(res.data)
        console.log(res)
    })
}, [])

    const handleTabs=(e,val) =>{
        console.warn(val);
        setValue(val)
    }
    const [value, setValue] = useState(0)

  return( 
      <div className={styles.container}>
          <MuiThemeProvider theme={theme}>
          <AppBar style={{ minWidth: 400 }} position="relative">
              <Tabs  value={value} onChange={handleTabs}>
                  <Tab  label="Temporada 1"/>
                  <Tab label="Temporada 2"/>
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
          <div className={styles.AnimeListContainer}>
          {posts.map(post =>
          <AnimeList nome={post.nome} id={post.id} iddois={props.id} episodio={post.numero}/> )} 
        
          
            {/* <AnimeList nome={props.nome}/> */}
            
            </div>

          </TabPanel>
          </MuiThemeProvider>
      </div>
  )
 }

 function TabPanel(props)
 { 
 const {children, value, index}=props
 
     return(<div>
         {
             value===index && (
                children
             )
         }
     </div>)
 }
  
export default Tabsa