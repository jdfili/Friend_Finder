var tableData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends_list", function (req, res) {
        res.json(tableData);
    });
    app.post("/api/friends_list", function (req, res) {
        tableData.push(req.body);
});

};
