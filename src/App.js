import React, { Component } from 'react';

const API_KEY = "9106bf97-aa4f-466f-9181-1bfab08c85e9"

class App extends Component{

  state = {
    images: [],
  }

  componentDidMount(){
    fetch(`https://api.thecatapi.com/v1/images/search?category_ids={{selected_category.id}}&api-key=${this.API}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({images: data})
    })
    .catch(console.log)
  }

render() {
  return this.state.images.length === 0 ?
  <p>'Loading...'</p> :
    <ul>
      {this.state.images.map(imgObj => (
        <li className="card">
        <h5 className="card-body">{imgObj.id}</h5>
        {/* <h6 class="card-subtitle mb-2 text-muted">{imgObj.height}</h6> */}
          <img src={imgObj.url}className="cat-img" />
        </li>

      ))}
    </ul>
  }
}

export default App;




