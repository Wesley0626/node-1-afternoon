const products = require("./products.json")

let getProducts = (req, res) => {
  if(req.query.price){
    const things = products.filter(obj => obj.price >= parseInt(req.query.price))
   return res.status(200).send(things)
  }  
  res.status(200).send(products)
}


module.exports = getProducts
