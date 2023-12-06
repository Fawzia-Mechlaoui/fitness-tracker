const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const fitnessTrackerPath = path.join(__dirname, 'fitness-tracker');


app.use(express.static(fitnessTrackerPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(fitnessTrackerPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
