// Server acts as an entry point

const express = require("express");
const cors = require("cors");
const app = express();

require("./server/config/mongoose.config");

// cors, json, and encoded must come before routes

app.use(cors());
app.use(express.json()); // req.body will be undefined without this
app.use(express.urlencoded({ extended: true }));

// executing the code in the route file
require("./server/routes/player.routes")(app);

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
