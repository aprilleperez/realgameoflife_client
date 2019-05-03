//import axios
//====================
import axios from "axios";

export default {
    getGames: function(q) {
        return axios.get('https://real-life-api.herokuapp.com/api/games/ + INSERT GAME NAME!', { params: { q: 'title:' + q} });
    }
}