// serve nmp install pg e npm install ejs
import { Client } from 'pg';
import express from 'express';
const app = express();
//const express = require('express');
const port = 3000;
const client = new Client({
  //connectionString: process.env.DATABASE_URL,
  connectionString: "postgresql://neondb_owner:npg_S8wDvg1lcqfM@ep-damp-voice-agmvqylt-pooler.c-2.eu-central-1.aws.neon.tech/ese01?sslmode=require&channel_binding=require",
  ssl: true, // Necessario per Neon
});
await client.connect();
const ris = await client.query('SELECT * FROM utenti');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  // Dati dinamici (es. da database)
  const d = { title: 'Pagina SSR', content: 'Contenuto della pagina sul server' };

  res.render('risposta', { dat: d, dati: ris.rows });  
});

app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
