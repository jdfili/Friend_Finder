var tableData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(tableData);
    });
    app.post("/api/friends", function (req, res) {
        var match = {
            name: "",
            photo: "",
            difference: 1000
        };
        var userScore = req.body.score;
        var totalDifference = 0;
        for (var i = 0; i < tableData.length; i++) {
            totalDifference = 0;
            for (var n = 0; n < tableData[i].score[n]; n++) {
                totalDifference += Math.abs(parseInt(userScore[n] - tableData[i].score[n]))
                if (totalDifference <= match.difference) {
                    match.name = tableData[i].name;
                    match.photo = tableData[i].image;
                    match.difference = totalDifference;

                }
            }
        }
        res.json(match);
    });

};
