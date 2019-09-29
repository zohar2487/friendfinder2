var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var totalDiference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function(item){
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User score " + userScores);

        var sum = b.reduce((a, b) => a = b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);
        console.log("--------------------------------------------------------");
         for (var i = 0; i < friends.length; i++) {
             console.log(friends[i].name);
             totalDiference + 0;
             console.log("Total Diff " + bestMatch.friendDifference);

             var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
             console.log("Total friend score " + bfriendScore);
             totalDiference += Math.abs(sum - bfriendScore);
             console.log("_______________________________________________> " = totalDiference);
         }

         });
};