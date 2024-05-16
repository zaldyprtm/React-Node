import cors from 'cors';
import express from 'express';
const app = express();
const port = 3000;
app.use(cors());

const coffeeData = [
  { id: 1, name: 'Espresso', type: 'Hot', price: 30000, stock: 20, imageUrl: 'https://source.unsplash.com/600x400/?espresso' },
  { id: 2, name: 'Americano', type: 'Hot', price: 25000, stock: 15, imageUrl: 'https://source.unsplash.com/600x400/?americano' },
  { id: 3, name: 'Latte', type: 'Hot', price: 35000, stock: 10, imageUrl: 'https://source.unsplash.com/600x400/?latte' },
  { id: 4, name: 'Cappuccino', type: 'Hot', price: 35000, stock: 12, imageUrl: 'https://source.unsplash.com/600x400/?cappuccino' },
  { id: 5, name: 'Iced Americano', type: 'Cold', price: 27000, stock: 8, imageUrl: 'https://source.unsplash.com/600x400/?iced,americano' },
  { id: 6, name: 'Iced Latte', type: 'Cold', price: 37000, stock: 5, imageUrl: 'https://source.unsplash.com/600x400/?iced,latte' },
  { id: 7, name: 'Cold Brew', type: 'Cold', price: 40000, stock: 7, imageUrl: 'https://source.unsplash.com/600x400/?cold,brew' }
];

app.get('/api/coffee', (req, res) => {
  res.json(coffeeData.map(coffee => ({ id: coffee.id, name: coffee.name, type: coffee.type, price: coffee.price, stock: coffee.stock, imageUrl: coffee.imageUrl })));
});

app.get('/api/coffee/:id', (req, res) => {
  const coffeeId = parseInt(req.params.id);
  const coffee = coffeeData.find(c => c.id === coffeeId);
  if (coffee) {
    res.json(coffee);
  } else {
    res.status(404).send('Coffee not found');
  }
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
