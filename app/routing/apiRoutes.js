var friends = require("../data/friends.js");


module.exports = function(app){
    app.get("./api/friends.js", function(req, res){
        res.json(friends);
    });

    app.post("./api/friends.js", function(req, res){
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
        console.log("++++++++++++++++++++++==================================");
         for (var i = 0; i < length; i++) {
             console.log(friends[i].name);
             totalDiference + 0;
             console.log("Total Diff " + bestMatch.friendDifference);
            console.log("Best match friend diff " + bestMatch.friendDifference);

             var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
             console.log("Total friend score " + bfriendScore);
             totalDiference += Math.abs(sum - bfriendScore);
             console.log("------------------------------> " + totalDiference);

             if  (totalDiference <= bestMatch.friendDifference) {
                 bestMatch.name = friends[i].name;
                 bestMatch.photo = friends[i].photo;
                 bestMatch.friendDifference = totalDiference;
               }
               console.log(totalDiference + " Total Difference");
            } 
               console.log(bestMatch);
               friends.push(userData);
               console.log("New User added");
               console.log(userData);
               res.json(bestMatch);
         

         });
};