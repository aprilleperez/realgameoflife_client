//dependencies
const axios =require("axios");

module.exports ={
    find: function(req,res){
        const { query: params } = req;
        axios
            .get("https://real-life-api.herokuapp.com/ + INSERT GAME NAME!", { params })
            .then(results => 
                results.data.items.filter( 
                    results =>
                    result.game.title
                )
            )
    }
};