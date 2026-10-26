const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=> res.json({status:'Server Purw Aktif Bos!', repo:'Bungsardi26/server-purw'}));
app.get('/api/bot-status', (req,res)=> res.json({status:'active', boss:'Bungsardi Purwoko', message:'Server jalan bos!'}));
module.exports = app;
