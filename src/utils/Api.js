import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

const API = {
    getRandomUsers: function() {
        return axios.get("https://randomuser.me/api/?results=20&nat=us");
      }
}


export default API;