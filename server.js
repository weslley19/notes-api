require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./src/routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
}); 
