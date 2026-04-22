const apiUrl = 'http://localhost:5000/api/items';

async function loadItems() {
    const response = await fetch(apiUrl);
    const items = await response.json();
    const list = document.getElementById('itemList');
    list.innerHTML = '';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${item.nome}</strong> - ${item.email} <br>
            <small>Tel: ${item.telefone} | End: ${item.endereco}</small> <br>
            <button onclick="updateItem(${item.id})">Editar</button>
            <button onclick="deleteItem(${item.id})">Deletar</button>
            <hr>
        `;
        list.appendChild(li);
    });
}

document.getElementById('createForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const itemData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value
    };

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
    });

    e.target.reset(); 
    loadItems();
});

async function updateItem(id) {
    const novoNome = prompt('Novo nome:');
    const novoEmail = prompt('Novo email:');
    const novoTelefone = prompt('Novo telefone:');
    const novoEndereco = prompt('Novo endereco:');

    if (novoNome || novoEmail) {
        await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nome: novoNome, 
                email: novoEmail,
                telefone: novoTelefone,
                endereco: novoEndereco
            })
        });
        loadItems();
    }
}

async function deleteItem(id) {
    if (confirm('Tem certeza que deseja deletar este item?')) {
        await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
        loadItems();
    }
}

loadItems();

