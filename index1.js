const express = require('express');
const app = express();


app.use(express.json());


let items = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 24.50 }
];

app.get('/items', (req, res) => {
    res.json(items);
});


app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items.find(item => item.id === parseInt(id));
    if (!item) {
        res.status(404).json({ message: `Item with id ${id} not found` });
    }
    res.json(item);
});

app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1;
    items.push(newItem);
    res.json(newItem);
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    items = items.map(item => item.id === id ? { ...item, ...updatedItem } : item);
    res.json(items.find(item => item.id === id));
});

app.patch('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    items = items.map(item => item.id === id ? { ...item, ...updates } : item);
    res.json(items.find(item => item.id === id));
});


app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items = items.filter(item => item.id !== id);
    res.json({ message: `Item with id ${id} deleted` });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});