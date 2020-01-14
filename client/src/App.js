import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
import Temp from "./Temp";

class App extends Component {
  // state = {
  //   text: "levdfeljb5",
  //   items: [],
  //   mvisibility: "",
  //   isLoaded: false
  // };
  // componentWillMount() {
  //   axios
  //     .get("http://localhost:7000/weather/5")
  //     .then(res => {
  //       this.setState({
  //         items: res.data.weather,
  //         mvisibility: res.data,
  //         isLoaded: true
  //       });
  //       console.log(res.data.weather);
  //       console.log(res.data.weather[0].description);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  render() {
    //const { items, mvisibility, isLoaded } = this.state;
    // if (!isLoaded) {
    //   return (
    //     <div className="App">
    //       <p>Loading...</p>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="App">
    //       <div>
    //         {items.map((item, index) => (
    //           <p>Name: {item.description}</p>
    //         ))}
    //       </div>
    //       <div>{this.state.mvisibility.visibility}</div>
    //     </div>
    //   );
    // }
    return (
      <div>
        <Temp />
      </div>
    );
  }
}

export default App;
