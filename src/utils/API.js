//import axios
//====================
import axios from "axios";

export default {
    getGames: function(q) {
        return axios.get('https://real-life-api.herokuapp.com/api/games/ + INSERT GAME NAME!', { params: { q: 'title:' + q} });
    },
    //creates new user
    registerUser: function(newUser){
        return axios.post('https://real-life-api.herokuapp.com/api/admin/signup/', newUser);
    },
    //logs in user
    logInUser: function(user){
        return axios.post('https://real-life-api.herokuapp.com/api/api/admin/login/',  user)
    },
    //logs out user
    logOutUser: function(user){
        return axios.post('https://real-life-api.herokuapp.com/api/admin/logout/', user)
    }
}