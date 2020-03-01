import React, { Component } from "react";

const API_KEY = "9106bf97-aa4f-466f-9181-1bfab08c85e9";

class App extends Component {
  state = {
    images: null,
    error: null,
    loading: true
  };

  componentDidMount() {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=100&order=DESC&breed_ids=beng`
    )
      .then(res => {
        // if (res.headers["Content-Type"] !== "application/json") {
        //   throw new Error()
        // }
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          // this.setState({ error: "Not found" });
          throw new Error();
        }
      })
      .then(data => {
        // console.log("App -> componentDidMount -> data", data);
        if (data && data.length !== 0) {
          this.setState({ images: data, error: null });
        } else {
          this.setState({ error: "No cats were found" });
        }
      })
      .catch(error => {
        // console.log("App -> componentDidMount -> error", error);
        this.setState({ error: "Something went wrong" });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return this.state.loading ? (
      <p>Loading...</p>
    ) : this.state.error ? (
      <p>{this.state.error}</p>
    ) : (
      <ul>
        {this.state.images.map(imgObj => (
          <li className="card">
            <h5 className="card-body">{imgObj.id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{imgObj.height}</h6>
            <img src={imgObj.url} className="cat-img" />
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
