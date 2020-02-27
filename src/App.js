import React, { Component } from 'react';

const API_KEY = "9106bf97-aa4f-466f-9181-1bfab08c85e9"

class App extends Component{

  state = {
    images: [],
    API: API_KEY
  }

  componentDidMount(){
    fetch('https://api.thecatapi.com/v1/images/search?limit=6&page=100&order=DESC')
    .then(res => res.json())
    .then((data) => {
      this.setState({images: data})
    })
    .catch(console.log)
  }

render() {
 console.log(this.state.images)
  return this.state.images.length === 0 ?
  'Loading...' :

    <ul className="">
      {this.state.images.map(imgObj => (
        <li>
          <img src={imgObj.url}className="cat-img" />
        </li>
      ))}
    </ul>
  
  }
}

export default App;




