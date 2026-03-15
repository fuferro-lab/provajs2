const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Dati dinamici (es. da database)
  const data = { title: 'Pagina SSR', content: 'Contenuto renderizzato sul server' };

  // Rendering lato server: il server compila l'HTML
  const html = `
    <html>
      <head><title>${data.title}</title></head>
      <body>
        <h1>${data.title}</h1>
        <p>${data.content}</p>
      </body>
    </html>
  `;
  res.send(html); // Invia HTML completo al client
});

app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
