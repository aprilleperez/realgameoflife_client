//dependencies
const axios =require("axios");

module.exports ={
    findAll: function(req,res){
        const { query: params } = req;
        axios
            .get("https://real-life-api.herokuapp.com/", { params })
            .then(results => 
                results.data.items.filter( 
                    results =>
                    result.game.title
                )
            )
    }
};