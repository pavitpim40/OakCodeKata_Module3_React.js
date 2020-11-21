import React from 'react'
import './App.css';


import Header from './component/Header.js'
import SearchForm from './component/SearchForm'
import Profiles from './component/Profiles'

const API = 'https://api.github.com/';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: 'nsebhastian',
      data: '',
    }
  }

  // A method in Class
  fetchSearch = (username) => {
    let url = `${API}search/users?q=${username}`;
    fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      this.setState({
        data // ใช้ Shorthand
      });
    })
    .catch((error) => console.log('Oops! . There Is A Problem' + error) )
  }
  

  componentDidMount() {
    this.fetchSearch(this.state.searchText);
  }
  render(){
  return (
    <div>
      <Header />
      <SearchForm 
        fetchSearch={this.fetchSearch} //ส่งฟังก์ชัน fetch ไปให้ SearchForm ใช้
      />
      <Profiles 
        data={this.state.data} //ส่งตัวแปร data ที่ได้จากการ fecth ไปให้ Profile ใช้
      />
    </div>
  )};
}

export default App;
