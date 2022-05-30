const serverPort=3000, webDir="../sivut";

let express = require('express');

const app = express();


app.use(express.static(webDir));

app.listen(serverPort);
console.log('Serveri on päällä http://localhost:'+serverPort);
console.log('materiaalit tulee: '+webDir);