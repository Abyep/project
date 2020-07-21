import axios from "axios";

const api = {


  getData(params) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        // Authorization: `Token ${token}`,
      };
      axios
        .get(`https://reqres.in/api/users?page=${params.id}`)
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          } else {
            reject(new Error("error"));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },

  
};

export default api;
