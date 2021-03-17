// Server acts as an entry point

const express = require("express");
const cors = require("cors");
const app = express();

// cors, json, and encoded must come before routes
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// executing the code in the route file
require("./server/routes/person.routes")(app);


const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
