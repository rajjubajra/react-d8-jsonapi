import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    articles: [],
    pages: [],
    blog: [],
    webformMsg: []
  }


  componentDidMount(){
//get article
    axios.get(`https://www.yellow-website.com/d8-JSONAPI/jsonapi/node/article`)
    .then( res => {
      this.setState({articles: res.data})
    })
    .catch(err => {
      console.log(err);
    })
//get page
    axios.get(`https://www.yellow-website.com/d8-JSONAPI/jsonapi/node/page`)
    .then( res => {
      this.setState({pages: res.data})
    })
    .catch(err => {
      console.log(err);
    })
//get blog
    axios.get(`https://www.yellow-website.com/d8-JSONAPI/jsonapi/node/blog`)
    .then( res => {
      this.setState({blog: res.data})
    })
    .catch(err => {
      console.log(err);
    })



  }
  



  render() {
    console.log('article', this.state.articles);
    console.log('page', this.state.pages);
    console.log('blog', this.state.blog);
    

    
  
    return (
      <div className="App">
       <h3>Drupal 8 JSON API</h3>
        
      </div>
    );
  }
}

export default App;
