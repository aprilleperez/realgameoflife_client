//import axios
//====================
import axios from "axios";

export default {
    getGames: function(q) {
        return axios.get('https://real-life-api.herokuapp.com/', { params: { q: 'title:' + q} });
    },
    getSavedGames: function() {
        return axios.get('https://real-life-api.herokuapp.com/');
    },
    deleteGames: function(id) {
        return axios.delete("https://real-life-api.herokuapp.com//" + id);
    },
    saveBook: function(Data) {
        return axios.post("https://real-life-api.herokuapp.com/", GamesData);
    }
}