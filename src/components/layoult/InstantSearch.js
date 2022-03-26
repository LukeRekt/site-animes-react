import React, { Component } from 'react'
import axios from 'axios'
import styles from './InstantSearch.module.css'
import { Link, Navigate } from 'react-router-dom'
class InstantSearch extends Component {


  constructor(props) {
    super(props)
    this.state = {
      Posts: [],
    }
    this.cancelToken = ''
    this.onIptClick = this.onIptClick.bind(this)
    this.node = React.createRef()
  }
  componentDidMount() {
     document.addEventListener('mousedown', this.onIptClick)
   }
   componentWillUnmount() {
     document.removeEventListener('mousedown', this.onIptClick)
    
   }
  onIptClick = (e) => {
    if (this.node.current.contains(e.target)) {
      return
    }
    setTimeout(() => {this.setState({
        Posts: [],
      })}, 100);
    
    
  }
  onLsChange = async (e) => {
    if (this.isReqToken) {
      this.isReqToken.cancel()
    }
    this.isReqToken = axios.CancelToken.source()
    await axios
      .get('http://localhost:3232/getanim', {
        isReqToken: this.isReqToken.token,
      })
      .then((res) => {
        this.setState({
          Posts: res.data.animes,
        })
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log('Could not get')
        }
      })
    let filterSearch = e.target.value.toLowerCase()
    let searchRes = this.state.Posts.filter((e) => {
      let finalRes = e.nome.toLowerCase()
      return finalRes.indexOf(filterSearch) !== -1
    })
    this.setState({
      Posts: searchRes,
    })
  }
  


  render() {
    return (
      <div className={styles.searchModule}>
        <input
          onClick={this.onIptClick}
          onChange={this.onLsChange}
          type="text"
          placeholder="Buscar ..."
          ref={this.node}
        />
        <ul>
          {this.state.Posts.map((res) => {
            return <Link to={`/anime/${res.id}`}><li key={res.id}>{res.nome}</li></Link>
          })}
        </ul>
      </div>
    )
  }
}
export default InstantSearch