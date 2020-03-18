var express = require("express");

var router = express.Router();

var db = require("../models")

router.get("/", function(req, res){
    db.Burger.findAll({}).then(function(response){
        var hbsObject = {
            burgers: response
        };
        console.log(response);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(result) {
        res.json({ id: result.insertID });
    });
});
router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " +req.params.id;
    console.log("condition", condition);
    
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result)
    })

})
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " +req.params.id;
    console.log("condition", condition);
    
    db.Burger.update({
        devoured: true
    },{
        where: {
            id: req.params.id
        }
    }).then(function(result){
        res.json(result)
    });
});

module.exports = router;