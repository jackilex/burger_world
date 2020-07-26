const express = require('express');

const router = express.Router();

const orm=require("../config/orm")

//routes\
//see all burgers
router.get('/', function (req, res) {
   orm.selectAll(function(error,data){
       if (error){
         return res.status(501).json({
             message:"not data could be fetched"
         })  
       }
    //    console.log('Burger:',data)
       res.render("index",{data})
   })

});
// add new burgers
router.post("/api/burgers", function(req, res) {
   let thisBurgerName= req.body.burger_name;

   orm.cookOne(thisBurgerName,function(error, data){
    if (error){
        console.log("No burger was added")
        return res.status(501).json({
            message:"No burger was added"
        })  
      }

      return res.json({
          name: thisBurgerName,
          eaten_burger: 0
        })
   })
  });

  // Update burger

  router.put("/api/burgers/:id/:value", function(req, res) {
    let value= req.params.value
    let id=req.params.id
    orm.updateOne(value,id, function(error,data){
        if (error){
            return res.status(501).json({
                message: "burger was not changed on database"
            });  
        }
        else if (res.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    })
  });


  router.put("/api/name/:id", function(req, res) {
    let value= req.body.update_name
    let id=req.params.id
    orm.updateName(value,id, function(error,data){
        if (error){
            return res.status(501).json({
                message: "burger Name was not changed on database"
            });  
        }
        else if (res.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    })
  });

  //Delete burger
    router.delete("/api/delete/:id", function(req, res) {
    let id=req.params.id
    orm.deleteOne(id,function(error,data){
        if (error){
            return res.status(501).json({
                message: "burger Name was not changed on database"
            });  
        }
        else if (res.affectededRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    })
  });
  



module.exports = router;