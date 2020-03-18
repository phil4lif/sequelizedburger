var express = require("express");

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert(["burger_name", "devoured"], [req.body.name, false]
    , function(result) {
        res.json({ id: result.insertID });
    });
});
router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " +req.params.id;
    console.log("condition", condition);
    
    burger.delete(condition, function(result){
        res.json(result)
    })

})
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " +req.params.id;
    console.log("condition", condition);
    
    burger.update({
        devoured: true
    }, condition, function(result){
        res.json(result)
    });
});

module.exports = router;