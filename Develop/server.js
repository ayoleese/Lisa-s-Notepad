const express = require('express');
const path = require('path');
const app = express();
const port = 3001;


app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });
  

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


