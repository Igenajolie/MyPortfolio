import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'src', 'data', 'portfolio.json');

app.get('/api/portfolio', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data file' });
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/portfolio', (req, res) => {
  const newData = req.body;
  fs.writeFile(dataFile, JSON.stringify(newData, null, 2), 'utf8', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write data file' });
    }
    res.json({ success: true, message: 'Portfolio updated successfully' });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Portfolio Local Studio API running on http://localhost:${PORT}`);
});
