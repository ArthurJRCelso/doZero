const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Helo, world!")
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Express is running PORT ${PORT}`))