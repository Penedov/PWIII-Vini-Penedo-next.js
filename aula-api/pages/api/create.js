//pages/apicreate.js
import { createConnection } from "mysql2/promise";

//funçao para conectar ao banco de dados
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database:'teste-api',
});
}

export default async function handler(req, res) {
    if (req.method !== 'POST'){
        return res.status(405).json({ error: 'metodo não permitido' });
    }

    const userdata = req.body;
    const { name, email} = userdata;

    if (!name || !email) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    try{
        //conexao ao mysql
        const connection = await connectToDatabase();

        //execuçao da query para inserir dados na tabela "user"
        const[result] = await connection.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);

        //checar se o usuario existe

        //encerra a conexao
        await connection.end();

        //resposta com os dados do usuario
        res.status(201).json({ id: result.insertId, message: 'Usuario criado com sucesso!' });
        
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}