const products = require('./products.json')

let getProduct = (req, res) => {
  let {id} = req.params
  const item = products.find(product => +product.id === +id)
  if(!item) {
    return res.status(500).send("Item not in list")
  }
  res.status(200).send(item)
}

module.exports = getProduct