var tableData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(tableData);
    });
    app.post("/api/friends", function (req, res) {
        tableData.push(req.body);
});

};
