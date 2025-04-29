//pages/api/delete.js
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

//rota da api delete de user
export default async function handler(req, res) {
    if (req.method !== 'DELETE'){
        return res.status(405).json({ error: 'metodo não permitido' });
    }

    const { id } = req.body;
    console.log(req.body);

    
    if (!id) {
        return res.status(400).json({ error: 'id é obrigatorio no request body' });

    }
    try{
        //conexao to the database
        const connection = await connectToDatabase();

        //execuçao da query para deletar a tabela "user"
        const[result] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);

        //encerra a conexao
        await connection.end();

        //rcheck se o delete teve sucesso
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }
        res.status(200).json({ message: 'Usuario deletado com sucesso!' });
        
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}