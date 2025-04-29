// pages/api/read.js
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
    if (req.method !== 'GET'){
        return res.status(405).json({ error: 'metodo não permitido' });
    }
    try{ 
        //conexao ao mysql
        const connection = await connectToDatabase();

        //execuçao da query para receber dados da tabela "user"
        const[rows] = await connection.execute('SELECT * FROM users WHERE id', );

        //verificar se o usuaruio existe
        if (rows.length === 0) {
            return res.status(404).json({ error: 'usuario não encontrado' });
        }

        //fechar a canoexao
        await connection.end();

        //resposta com os dados do usuario
        res.status(200).json(rows);
    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}


