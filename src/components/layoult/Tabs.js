import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import "./App.css";
import {Tabs, Tab, AppBar} from "@material-ui/core"
import styles from "./Tabs.module.css"
import AnimeList from './AnimeList'
function Tabsa(props) {
    
    
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
          <AppBar style={{ minWidth: 400 }} position="relative">
              <Tabs value={value} onChange={handleTabs}>
                  <Tab label="Temporada 1"/>
                  <Tab label="Temporada 2"/>
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
          
          {posts.map(post =>
          <AnimeList nome={post.nome} id={post.id} iddois={props.id}/> )} 
        
          
            {/* <AnimeList nome={props.nome}/> */}
            
              
          </TabPanel>
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