const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Admin@123',
  database: 'AssetDB'
};

const pool = mysql.createPool(dbConfig);
console.log('✅ Connected to MySQL');

app.get('/api/assets', async (req, res) => {
  try {
    const [rows] = await pool.promise().query('SELECT * FROM assets');
    res.json(rows);
  } catch (err) {
    console.error('❌ DB Error:', err);
    res.status(500).send(err.message);
  }
});

app.post('/api/assets', async (req, res) => {
  try {
    const { asset_name, asset_type, purchase_date, assigned_to, status } = req.body;
    await pool.promise().query(
      'INSERT INTO assets (asset_name, asset_type, purchase_date, assigned_to, status) VALUES (?, ?, ?, ?, ?)',
      [asset_name, asset_type, purchase_date, assigned_to, status]
    );
    res.status(201).json({ message: 'Asset added.' });
  } catch (err) {
    console.error('❌ DB Error:', err);
    res.status(500).send(err.message);
  }
});

app.put('/api/assets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { asset_name, asset_type, purchase_date, assigned_to, status } = req.body;
    const [result] = await pool.promise().query(
      'UPDATE assets SET asset_name = ?, asset_type = ?, purchase_date = ?, assigned_to = ?, status = ? WHERE id = ?',
      [asset_name, asset_type, purchase_date, assigned_to, status, id]
    );
    if (result.affectedRows === 0) return res.status(404).send('Asset not found');
    res.json({ message: 'Asset updated.' });
  } catch (err) {
    console.error('❌ DB Error:', err);
    res.status(500).send(err.message);
  }
});

app.delete('/api/assets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.promise().query('DELETE FROM assets WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).send('Asset not found');
    res.json({ message: 'Asset deleted.' });
  } catch (err) {
    console.error('❌ DB Error:', err);
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
