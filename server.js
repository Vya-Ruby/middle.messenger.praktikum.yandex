const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port ${PORT}! \n server: http://localhost:${PORT}`);
});
