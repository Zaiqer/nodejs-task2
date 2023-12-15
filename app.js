const express = require('express');
const app = express();

const products = [
  { id: 1, name: 'Phone', price: 200, quantity: 50 },
  { id: 2, name: 'Case', price: 150, quantity: 30 },
  { id: 3, name: 'Mother Board', price: 500, quantity: 10 },
  { id: 4, name: 'Computer', price: 2000, quantity: 5 },
  { id: 5, name: 'Monitor', price: 100, quantity: 130 },
  { id: 6, name: 'Phone', price: 790, quantity: 90 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
