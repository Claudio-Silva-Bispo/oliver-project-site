import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'ID do contato é obrigatório' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_orcamento').deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'Orçamento não encontrado' });
            }
            return res.status(200).json({ message: 'Orçamento excluído com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir orçamento:', error);
            return res.status(500).json({ error: 'Erro ao excluir orçamento' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
