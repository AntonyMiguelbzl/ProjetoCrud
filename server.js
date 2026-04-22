import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;


app.use(cors()); 
app.use(express.json());

let items = [];
let nextId = 1;


app.get('/api/items', (req, res) => {
    res.json(items);
});

app.post('/api/items', (req, res) => {
    const { nome, email, telefone, endereco } = req.body;
    
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e Email são obrigatórios' });
    }

    const newItem = { 
        id: nextId++, 
        nome, 
        email, 
        telefone, 
        endereco 
    };
    
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, endereco } = req.body;

    const index = items.findIndex(i => i.id == id);

    if (index === -1) {
        return res.status(404).json({ error: 'Item não encontrado' });
    }


    items[index] = {
        ...items[index], 
        nome: nome || items[index].nome,
        email: email || items[index].email,
        telefone: telefone || items[index].telefone,
        endereco: endereco || items[index].endereco
    };

    res.json(items[index]);
});

app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const index = items.findIndex(i => i.id == id);

    if (index === -1) {
        return res.status(404).json({ error: 'Item não encontrado' });
    }

    items.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});