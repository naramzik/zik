import conn from '@/server/db';
import type { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const sql = `SELECT * FROM ping`;
    conn.query(sql, (err, results) => {
      return res.status(200).send('pong');
    });
  }
}

export default handler;
