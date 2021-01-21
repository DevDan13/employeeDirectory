import React, { Component } from "react";
import API from "../utils/Api";
//import search form and search results components here

class Employee extends Component {
    state = {

    }


    loadRandomUsers = () => {
        API.getRandomUsers()
          .then(res =>
            console.log(res)
            // this.setState({
            //   image: res.data.message
            // })
          )
          .catch(err => console.log(err));
      };

    render() {
        return();
    }
}