const db = require('../../backend/db');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [results] = await db.query('SELECT * FROM students ORDER BY created_at DESC');
      return res.status(200).json(results);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });
}